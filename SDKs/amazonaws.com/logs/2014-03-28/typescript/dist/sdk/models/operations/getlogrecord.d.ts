import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLogRecordXAmzTargetEnum {
    Logs20140328GetLogRecord = "Logs_20140328.GetLogRecord"
}
export declare class GetLogRecordRequest extends SpeakeasyBase {
    getLogRecordRequest: shared.GetLogRecordRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLogRecordXAmzTargetEnum;
}
export declare class GetLogRecordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLogRecordResponse?: shared.GetLogRecordResponse;
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
