import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DiscoverInstancesXAmzTargetEnum {
    Route53AutoNamingV20170314DiscoverInstances = "Route53AutoNaming_v20170314.DiscoverInstances"
}
export declare class DiscoverInstancesRequest extends SpeakeasyBase {
    discoverInstancesRequest: shared.DiscoverInstancesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DiscoverInstancesXAmzTargetEnum;
}
export declare class DiscoverInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    discoverInstancesResponse?: shared.DiscoverInstancesResponse;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * NamespaceNotFound
     */
    namespaceNotFound?: any;
    /**
     * RequestLimitExceeded
     */
    requestLimitExceeded?: any;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
