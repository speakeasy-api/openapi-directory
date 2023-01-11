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
     * createCustomImage - Create a Custom Image
     *
     * To create a new custom image, send a POST request to /v2/images.
     * The body must contain a url attribute pointing to a Linux virtual machine
     * image to be imported into DigitalOcean.
     * The image must be in the raw, qcow2, vhdx, vdi, or vmdk format.
     * It may be compressed using gzip or bzip2 and must be smaller than 100 GB after
     *  being decompressed.
     *
    **/
    createCustomImage(req: operations.CreateCustomImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomImageResponse>;
    /**
     * deleteImage - Delete an Image
     *
     * To delete a snapshot or custom image, send a `DELETE` request to `/v2/images/$IMAGE_ID`.
     *
    **/
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     * getImage - Retrieve an Existing Image
     *
     * To retrieve information about an image, send a `GET` request to
     * `/v2/images/$IDENTIFIER`.
     *
    **/
    getImage(req: operations.GetImageRequest, config?: AxiosRequestConfig): Promise<operations.GetImageResponse>;
    /**
     * getImagesList - List All Images
     *
     * To list all of the images available on your account, send a GET request to /v2/images.
     *
     * ## Filtering Results
     * -----
     *
     * It's possible to request filtered results by including certain query parameters.
     *
     * **Image Type**
     *
     * Either 1-Click Application or OS Distribution images can be filtered by using the `type` query parameter.
     *
     * > Important: The `type` query parameter does not directly relate to the `type` attribute.
     *
     * To retrieve only ***distribution*** images, include the `type` query parameter set to distribution, `/v2/images?type=distribution`.
     *
     * To retrieve only ***application*** images, include the `type` query parameter set to application, `/v2/images?type=application`.
     *
     * **User Images**
     *
     * To retrieve only the private images of a user, include the `private` query parameter set to true, `/v2/images?private=true`.
     *
     * **Tags**
     *
     * To list all images assigned to a specific tag, include the `tag_name` query parameter set to the name of the tag in your GET request. For example, `/v2/images?tag_name=$TAG_NAME`.
     *
    **/
    getImagesList(req: operations.GetImagesListRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesListResponse>;
    /**
     * updateImage - Update an Image
     *
     * To update an image, send a `PUT` request to `/v2/images/$IMAGE_ID`.
     * Set the `name` attribute to the new value you would like to use.
     * For custom images, the `description` and `distribution` attributes may also be updated.
     *
    **/
    updateImage(req: operations.UpdateImageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImageResponse>;
}
