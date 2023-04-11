import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LookupEventsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEvents = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents"
}
export declare class LookupEventsRequest extends SpeakeasyBase {
    lookupEventsRequest: shared.LookupEventsRequest;
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
    xAmzTarget: LookupEventsXAmzTargetEnum;
}
export declare class LookupEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidEventCategoryException
     */
    invalidEventCategoryException?: any;
    /**
     * InvalidLookupAttributesException
     */
    invalidLookupAttributesException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidTimeRangeException
     */
    invalidTimeRangeException?: any;
    /**
     * Success
     */
    lookupEventsResponse?: shared.LookupEventsResponse;
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
