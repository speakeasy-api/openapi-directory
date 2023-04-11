import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.elastic-inference.{region}.amazonaws.com", "https://api.elastic-inference.{region}.amazonaws.com", "http://api.elastic-inference.{region}.amazonaws.com.cn", "https://api.elastic-inference.{region}.amazonaws.com.cn"];
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
 *  Elastic Inference public APIs.
 *
 * @see {@link https://docs.aws.amazon.com/elastic-inference/} - Amazon Web Services documentation
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
     *  Describes the locations in which a given accelerator type or set of types is present in a given region.
     */
    describeAcceleratorOfferings(req: operations.DescribeAcceleratorOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAcceleratorOfferingsResponse>;
    /**
     *  Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
     */
    describeAcceleratorTypes(req: operations.DescribeAcceleratorTypesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAcceleratorTypesResponse>;
    /**
     *  Describes information over a provided set of accelerators belonging to an account.
     */
    describeAccelerators(req: operations.DescribeAcceleratorsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAcceleratorsResponse>;
    /**
     *  Returns all tags of an Elastic Inference Accelerator.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Adds the specified tags to an Elastic Inference Accelerator.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     *  Removes the specified tags from an Elastic Inference Accelerator.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
