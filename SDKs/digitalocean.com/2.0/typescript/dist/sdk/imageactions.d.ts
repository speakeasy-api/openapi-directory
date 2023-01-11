import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImageActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getImageAction - Retrieve an Existing Action
     *
     * To retrieve the status of an image action, send a GET request to `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.
    **/
    getImageAction(req: operations.GetImageActionRequest, config?: AxiosRequestConfig): Promise<operations.GetImageActionResponse>;
    /**
     * listImageActions - List All Actions for an Image
     *
     * To retrieve all actions that have been executed on an image, send a GET request to `/v2/images/$IMAGE_ID/actions`.
    **/
    listImageActions(req: operations.ListImageActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListImageActionsResponse>;
    /**
     * postImageAction - Initiate an Image Action
     *
     * The following actions are available on an Image.
     *
     * ## Convert an Image to a Snapshot
     *
     * To convert an image, for example, a backup to a snapshot, send a POST request
     * to `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.
     *
     * ## Transfer an Image
     *
     * To transfer an image to another region, send a POST request to
     * `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set
     * `region` attribute to the slug identifier of the region you wish to transfer
     * to.
     *
    **/
    postImageAction(req: operations.PostImageActionRequest, config?: AxiosRequestConfig): Promise<operations.PostImageActionResponse>;
}
