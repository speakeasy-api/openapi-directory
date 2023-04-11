import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRecordsXAmzTargetEnum {
    DynamoDBStreams20120810GetRecords = "DynamoDBStreams_20120810.GetRecords"
}
export declare class GetRecordsRequest extends SpeakeasyBase {
    getRecordsInput: shared.GetRecordsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRecordsXAmzTargetEnum;
}
export declare class GetRecordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExpiredIteratorException
     */
    expiredIteratorException?: any;
    /**
     * Success
     */
    getRecordsOutput?: shared.GetRecordsOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TrimmedDataAccessException
     */
    trimmedDataAccessException?: any;
}
