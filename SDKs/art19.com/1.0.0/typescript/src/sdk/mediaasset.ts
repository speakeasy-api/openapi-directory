import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class MediaAsset {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getMediaAssets - Get a list of media assets
   *
   * A media asset is part of a collection of assets or files representing an image or a piece of audio content
   * like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
   * and a piece of audio content usually comes in different encoding formats.
   * 
   * The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
   * The collection is what an asset is attached to (`attachment_id|type`).
   * 
   * ## Styles for Images
   * 
   * Most media assets use square images. You may upload and use a square image, or upload an image of any
   * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
   * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
   * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
   * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
   * version of the original file with the smaller of width or height as the square size.
   * 
   * The original image as uploaded into the system is always retained unmodified and available through
   * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
   * 
   * An image has media assets with the following styles:
   * 
   * - `original`: This is the original file provided. May not be available, depending on permissions
   *   and file type.
   * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
   *   This should be used for any application needing the original, uncropped, image.
   * - `regular`: If the image has cropping defined, this is the cropped image.
   *   If not, this is a square version of the original.
   * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
   * - `square-400`: A square version of the image with a size of `400x400` pixels.
   * - `square-640`: A square version of the image with a size of `640x640` pixels.
   * - `square-888`: A square version of the image with a size of `888x888` pixels.
   * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
   *   This variant is only created if the cropped width & height are each at least 3000.
   * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
   * 
   * ### Preferred image used in feeds
   * 
   * For the main series image used in feeds, it is ideal to use the `square-3000` version.
   * If that is not available, the `itunes` version should be used instead.
   * 
   * 
   * ## Styles for Audio
   * 
   * - `medium`: A medium-quality version of the audio asset in various formats.
   * - `original`: This is the original file provided. May not be available, depending on permissions
   *   and file type.
   * - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
   * 
   * 
  **/
  getMediaAssets(
    req: operations.GetMediaAssetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaAssetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaAssetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/media_assets";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMediaAssetsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getMediaAssets200ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getMediaAssets400ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMediaAssetsId - Get a specific media asset
   *
   * A media asset is part of a collection of assets or files representing an image or a piece of audio content
   * like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
   * and a piece of audio content usually comes in different encoding formats.
   * 
   * The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
   * The collection is what an asset is attached to (`attachment_id|type`).
   * 
   * ## Styles for Images
   * 
   * Most media assets use square images. You may upload and use a square image, or upload an image of any
   * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
   * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
   * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
   * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
   * version of the original file with the smaller of width or height as the square size.
   * 
   * The original image as uploaded into the system is always retained unmodified and available through
   * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
   * 
   * An image has media assets with the following styles:
   * 
   * - `original`: This is the original file provided. May not be available, depending on permissions
   *   and file type.
   * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
   *   This should be used for any application needing the original, uncropped, image.
   * - `regular`: If the image has cropping defined, this is the cropped image.
   *   If not, this is a square version of the original.
   * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
   * - `square-400`: A square version of the image with a size of `400x400` pixels.
   * - `square-640`: A square version of the image with a size of `640x640` pixels.
   * - `square-888`: A square version of the image with a size of `888x888` pixels.
   * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
   *   This variant is only created if the cropped width & height are each at least 3000.
   * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
   * 
   * ### Preferred image used in feeds
   * 
   * For the main series image used in feeds, it is ideal to use the `square-3000` version.
   * If that is not available, the `itunes` version should be used instead.
   * 
   * 
   * ## Styles for Audio
   * 
   * - `medium`: A medium-quality version of the audio asset in various formats.
   * - `original`: This is the original file provided. May not be available, depending on permissions
   *   and file type.
   * - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
   * 
   * 
  **/
  getMediaAssetsId(
    req: operations.GetMediaAssetsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaAssetsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaAssetsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/media_assets/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMediaAssetsIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getMediaAssetsId200ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

}
