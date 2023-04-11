import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDiscoveredResourcesXAmzTargetEnum {
    AWSFMS20180101ListDiscoveredResources = "AWSFMS_20180101.ListDiscoveredResources"
}
export declare class ListDiscoveredResourcesRequest extends SpeakeasyBase {
    listDiscoveredResourcesRequest: shared.ListDiscoveredResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDiscoveredResourcesXAmzTargetEnum;
}
export declare class ListDiscoveredResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * Success
     */
    listDiscoveredResourcesResponse?: shared.ListDiscoveredResourcesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
