import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetQueryResultsXAmzTargetEnum {
    Logs20140328GetQueryResults = "Logs_20140328.GetQueryResults"
}
export declare class GetQueryResultsRequest extends SpeakeasyBase {
    getQueryResultsRequest: shared.GetQueryResultsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQueryResultsXAmzTargetEnum;
}
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getQueryResultsResponse?: shared.GetQueryResultsResponse;
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
