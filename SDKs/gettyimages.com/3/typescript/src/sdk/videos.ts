import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Videos {
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
   * getV3Videos - Get metadata for multiple videos by supplying multiple video ids
   *
   * Use this endpoint to return detailed video metadata for all the specified video ids.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "event_ids",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3Videos(
    req: operations.GetV3VideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/videos";
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3VideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3VideosId - Get metadata for a single video by supplying one video id
   *
   * Use this endpoint to return detailed video metadata for the specified video id.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "event_ids",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3VideosId(
    req: operations.GetV3VideosIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/videos/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3VideosIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3VideosIdDownloadhistory - Returns information about a customer's download history for a specific asset
  **/
  getV3VideosIdDownloadhistory(
    req: operations.GetV3VideosIdDownloadhistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdDownloadhistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdDownloadhistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/videos/{id}/downloadhistory", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3VideosIdDownloadhistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assetDownloadHistoryResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3VideosIdSameSeries - Retrieve creative videos from the same series
   *
   * This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
  **/
  getV3VideosIdSameSeries(
    req: operations.GetV3VideosIdSameSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdSameSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdSameSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/videos/{id}/same-series", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3VideosIdSameSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3VideosIdSimilar - Retrieve similar videos
   *
   * This endpoint will provide a list of videos that are similar to the specified asset id.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "event_ids",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
  **/
  getV3VideosIdSimilar(
    req: operations.GetV3VideosIdSimilarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdSimilarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdSimilarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/videos/{id}/similar", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3VideosIdSimilarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
