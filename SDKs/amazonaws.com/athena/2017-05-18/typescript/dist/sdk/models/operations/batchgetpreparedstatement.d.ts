import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetPreparedStatementXAmzTargetEnum {
    AmazonAthenaBatchGetPreparedStatement = "AmazonAthena.BatchGetPreparedStatement"
}
export declare class BatchGetPreparedStatementRequest extends SpeakeasyBase {
    batchGetPreparedStatementInput: shared.BatchGetPreparedStatementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetPreparedStatementXAmzTargetEnum;
}
export declare class BatchGetPreparedStatementResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetPreparedStatementOutput?: shared.BatchGetPreparedStatementOutput;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
