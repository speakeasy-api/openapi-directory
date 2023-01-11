import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Search {
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
   * getV3SearchEvents - Search for events
   *
   * Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
  **/
  getV3SearchEvents(
    req: operations.GetV3SearchEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/events";
    
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
        const res: operations.GetV3SearchEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.eventsSearchResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3SearchImages - Search for both creative and editorial images
   *
   * Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images. Because this draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons, it is highly recommended that those endpoints are used instead of this blended endpoint.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
   * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
   * 
   * 	-H "Authorization: Bearer <your-token>"
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. 
   * The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
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
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * ]
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most 
   * frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
   * in your request.
   * 
   * ```
   * {
   *     "images": 
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
  getV3SearchImages(
    req: operations.GetV3SearchImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images";
    
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
        const res: operations.GetV3SearchImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.imageSearchItemSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3SearchImagesCreative - Search for creative images only
   *
   * Use this endpoint to search our contemporary stock photos, illustrations and archival images.
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
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to 
   * build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to 
   * build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
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
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * ]
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
   * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
   * in your result set when you include **display_set** in your request.
   * 
   * ```Go
   * {
   *     "images": 
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
  **/
  getV3SearchImagesCreative(
    req: operations.GetV3SearchImagesCreativeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesCreativeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesCreativeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images/creative";
    
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
        const res: operations.GetV3SearchImagesCreativeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.creativeImageSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3SearchImagesCreativeByImage - Search for creative images based on url
   *
   * Allows searching for similar creative images by passing the URL to an existing image. All responses will have the exclude_nudity filter automatically applied.
   * 
   * Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
   * For example, using cURL:
   * ```sh
   * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
   * ```
   * 
   * Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
   * 
   * Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
   * 
   * <!-- TODO/HACK from https://app.clickup.com/t/8mfmv3 - Uncomment this if image_fingerprint ever comes back to be useful -->
   * <!-- Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the initial search. -->
   * 
  **/
  getV3SearchImagesCreativeByImage(
    req: operations.GetV3SearchImagesCreativeByImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesCreativeByImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesCreativeByImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images/creative/by-image";
    
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
        const res: operations.GetV3SearchImagesCreativeByImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchByImageResourceResults = httpRes?.data;
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
   * getV3SearchImagesEditorial - Search for editorial images only
   *
   * Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
   * 
   * 	-H "Authorization: Bearer <your-token>"
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
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
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * ]
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "images": 
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
  getV3SearchImagesEditorial(
    req: operations.GetV3SearchImagesEditorialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesEditorialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesEditorialRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images/editorial";
    
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
        const res: operations.GetV3SearchImagesEditorialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.editorialImageSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3SearchVideosCreative - Search for creative videos
   *
   * Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
   * being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only 
   * assets that you have a license to use, you need to also include an authorization token in the header of your request.
   * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
   * response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
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
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
   * detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
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
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
   * that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result 
   * set when you include **display_set** in your request.
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
  getV3SearchVideosCreative(
    req: operations.GetV3SearchVideosCreativeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchVideosCreativeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchVideosCreativeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/videos/creative";
    
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
        const res: operations.GetV3SearchVideosCreativeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.creativeVideoSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3SearchVideosCreativeByImage - Search for creative videos based on url
   *
   * Search for **similar creative videos** by passing an `asset_id` to an asset in our catalog OR `image_url` to any image or a frame grab from a video. All responses will have the exclude_nudity filter automatically applied.
   * 
   * ## Searching by URL
   * 
   * When searching by `image_url`, an image or frame grab in JPEG format must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
   * Example using cURL:
   * ```sh
   * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
   * ```
   * 
   * Uploads will be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
   * 
   * Once the JPEG has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
   * 
   * ## Searching by asset id
   * 
   * When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used. 
  **/
  getV3SearchVideosCreativeByImage(
    req: operations.GetV3SearchVideosCreativeByImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchVideosCreativeByImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchVideosCreativeByImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/videos/creative/by-image";
    
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
        const res: operations.GetV3SearchVideosCreativeByImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.creativeVideoSearchResults = httpRes?.data;
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
   * getV3SearchVideosEditorial - Search for editorial videos
   *
   * Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.
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
  getV3SearchVideosEditorial(
    req: operations.GetV3SearchVideosEditorialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchVideosEditorialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchVideosEditorialRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/videos/editorial";
    
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
        const res: operations.GetV3SearchVideosEditorialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.editorialVideoSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
  }

}
