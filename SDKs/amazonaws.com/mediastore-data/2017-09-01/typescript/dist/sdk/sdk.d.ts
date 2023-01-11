import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://data.mediastore.{region}.amazonaws.com", "https://data.mediastore.{region}.amazonaws.com", "http://data.mediastore.{region}.amazonaws.com.cn", "https://data.mediastore.{region}.amazonaws.com.cn"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * deleteObject - Deletes an object at the specified path.
    **/
    deleteObject(req: operations.DeleteObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectResponse>;
    /**
     * describeObject - Gets the headers for an object at the specified path.
    **/
    describeObject(req: operations.DescribeObjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeObjectResponse>;
    /**
     * getObject - Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
    **/
    getObject(req: operations.GetObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectResponse>;
    /**
     * listItems - Provides a list of metadata entries about folders and objects in the specified folder.
    **/
    listItems(req: operations.ListItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListItemsResponse>;
    /**
     * putObject - Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.
    **/
    putObject(req: operations.PutObjectRequest, config?: AxiosRequestConfig): Promise<operations.PutObjectResponse>;
}
