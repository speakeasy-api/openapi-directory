import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetShardIteratorXAmzTargetEnum {
    Kinesis20131202GetShardIterator = "Kinesis_20131202.GetShardIterator"
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
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getShardIteratorOutput?: shared.GetShardIteratorOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
