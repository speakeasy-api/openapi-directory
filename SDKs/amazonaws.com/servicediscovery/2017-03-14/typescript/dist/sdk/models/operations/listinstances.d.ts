import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInstancesXAmzTargetEnum {
    Route53AutoNamingV20170314ListInstances = "Route53AutoNaming_v20170314.ListInstances"
}
export declare class ListInstancesRequest extends SpeakeasyBase {
    listInstancesRequest: shared.ListInstancesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstancesXAmzTargetEnum;
}
export declare class ListInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    listInstancesResponse?: shared.ListInstancesResponse;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
