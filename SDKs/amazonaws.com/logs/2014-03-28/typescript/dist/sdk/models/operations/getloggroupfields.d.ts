import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLogGroupFieldsXAmzTargetEnum {
    Logs20140328GetLogGroupFields = "Logs_20140328.GetLogGroupFields"
}
export declare class GetLogGroupFieldsRequest extends SpeakeasyBase {
    getLogGroupFieldsRequest: shared.GetLogGroupFieldsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLogGroupFieldsXAmzTargetEnum;
}
export declare class GetLogGroupFieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLogGroupFieldsResponse?: shared.GetLogGroupFieldsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
