import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNewTag - Create a New Tag
     *
     * To create a tag you can send a POST request to `/v2/tags` with a `name` attribute.
    **/
    createNewTag(req: operations.CreateNewTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewTagResponse>;
    /**
     * deleteTag - Delete a Tag
     *
     * A tag can be deleted by sending a `DELETE` request to `/v2/tags/$TAG_NAME`. Deleting a tag also untags all the resources that have previously been tagged by the Tag.
    **/
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * getTag - Retrieve a Tag
     *
     * To retrieve an individual tag, you can send a `GET` request to `/v2/tags/$TAG_NAME`.
    **/
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * listAllTags - List All Tags
     *
     * To list all of your tags, you can send a GET request to `/v2/tags`.
    **/
    listAllTags(config?: AxiosRequestConfig): Promise<operations.ListAllTagsResponse>;
    /**
     * tagResource - Tag a Resource
     *
     * Resources can be tagged by sending a POST request to `/v2/tags/$TAG_NAME/resources` with an array of json objects containing `resource_id` and `resource_type` attributes.
     * Currently only tagging of Droplets, Images, Volumes, and Volume Snapshots is supported. `resource_id` is expected to be the Droplet's id, Image's id, or Volume/Volume Snapshot's UUID attribute as a string, and `resource_type` is expected to be the string `droplet`, `image`, `volume` or `volume_snapshot`.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Untag a Resource
     *
     * Resources can be tagged by sending a DELETE request to `/v2/tags/$TAG_NAME/resources` with an array of json objects containing `resource_id` and `resource_type` attributes.
     * Currently only untagging of Droplets, Images, Volumes, and Volume Snapshots is supported. `resource_id` is expected to be the Droplet's id, Image's id, or Volume/Volume Snapshot's UUID attribute as a string, and `resource_type` is expected to be the string `droplet`, `image`, `volume` or `volume_snapshot`.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
