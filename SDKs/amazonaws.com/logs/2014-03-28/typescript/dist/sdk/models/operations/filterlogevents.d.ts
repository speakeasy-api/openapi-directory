import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum FilterLogEventsXAmzTargetEnum {
    Logs20140328FilterLogEvents = "Logs_20140328.FilterLogEvents"
}
export declare class FilterLogEventsRequest extends SpeakeasyBase {
    filterLogEventsRequest: shared.FilterLogEventsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: FilterLogEventsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class FilterLogEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filterLogEventsResponse?: shared.FilterLogEventsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
