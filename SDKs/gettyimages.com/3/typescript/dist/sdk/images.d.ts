import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3Images - Get metadata for multiple images by supplying multiple image ids
     *
     * This endpoint returns the detailed image metadata for all specified images.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "artist_title",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "city",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "country",
     *         "credit_line",
     *         "date_created",
     *         "date_submitted",
     *         "download_sizes",
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
     * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
     * in your result set when you include **display_set** in your request.
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
    getV3Images(req: operations.GetV3ImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ImagesResponse>;
    /**
     * getV3ImagesId - Get metadata for a single image by supplying one image id
     *
     * This endpoint returns the detailed image metadata for a specified image.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that
     * are often used to build search response results. The following fields are provided for every image in your
     * result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are
     * often used to build a detailed view of images. The following fields are provided for every image in your
     * result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "artist_title",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "city",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "country",
     *         "credit_line",
     *         "date_created",
     *         "date_submitted",
     *         "download_sizes",
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
     * resolution files that are most frequently used to build a UI displaying search results. The following fields are provided
     * for every image in your result set when you include **display_set** in your request.
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
    getV3ImagesId(req: operations.GetV3ImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ImagesIdResponse>;
    /**
     * getV3ImagesIdDownloadhistory - Returns information about a customer's download history for a specific asset
    **/
    getV3ImagesIdDownloadhistory(req: operations.GetV3ImagesIdDownloadhistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ImagesIdDownloadhistoryResponse>;
    /**
     * getV3ImagesIdSameSeries - Retrieve creative images from the same series
     *
     * This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
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
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
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
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
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
    **/
    getV3ImagesIdSameSeries(req: operations.GetV3ImagesIdSameSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ImagesIdSameSeriesResponse>;
    /**
     * getV3ImagesIdSimilar - Retrieve similar images
     *
     * This endpoint will provide a list of images that are similar to the specified asset id.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
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
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
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
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
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
    **/
    getV3ImagesIdSimilar(req: operations.GetV3ImagesIdSimilarRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ImagesIdSimilarResponse>;
}
