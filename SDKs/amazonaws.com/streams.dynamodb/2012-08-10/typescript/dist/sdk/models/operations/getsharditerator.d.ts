import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetShardIteratorXAmzTargetEnum {
    DynamoDBStreams20120810GetShardIterator = "DynamoDBStreams_20120810.GetShardIterator"
}
export declare class GetShardIteratorRequest extends SpeakeasyBase {
    getShardIteratorInput: shared.GetShardIteratorInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetShardIteratorXAmzTargetEnum;
}
export declare class GetShardIteratorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getShardIteratorOutput?: shared.GetShardIteratorOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
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
