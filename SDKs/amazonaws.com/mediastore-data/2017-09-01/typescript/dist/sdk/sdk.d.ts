import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://data.mediastore.{region}.amazonaws.com", "https://data.mediastore.{region}.amazonaws.com", "http://data.mediastore.{region}.amazonaws.com.cn", "https://data.mediastore.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3 service. Objects are the fundamental entities that are stored in AWS Elemental MediaStore.
 *
 * @see {@link https://docs.aws.amazon.com/mediastore/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Deletes an object at the specified path.
     */
    deleteObject(req: operations.DeleteObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectResponse>;
    /**
     * Gets the headers for an object at the specified path.
     */
    describeObject(req: operations.DescribeObjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeObjectResponse>;
    /**
     * Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
     */
    getObject(req: operations.GetObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectResponse>;
    /**
     * Provides a list of metadata entries about folders and objects in the specified folder.
     */
    listItems(req: operations.ListItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListItemsResponse>;
    /**
     * Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.
     */
    putObject(req: operations.PutObjectRequest, config?: AxiosRequestConfig): Promise<operations.PutObjectResponse>;
}
