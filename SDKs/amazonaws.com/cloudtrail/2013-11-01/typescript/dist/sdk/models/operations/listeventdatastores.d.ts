import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEventDataStoresXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListEventDataStores = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores"
}
export declare class ListEventDataStoresRequest extends SpeakeasyBase {
    listEventDataStoresRequest: shared.ListEventDataStoresRequest;
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
    xAmzTarget: ListEventDataStoresXAmzTargetEnum;
}
export declare class ListEventDataStoresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listEventDataStoresResponse?: shared.ListEventDataStoresResponse;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
