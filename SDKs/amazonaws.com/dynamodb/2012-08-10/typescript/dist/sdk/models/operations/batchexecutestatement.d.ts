import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchExecuteStatementXAmzTargetEnum {
    DynamoDB20120810BatchExecuteStatement = "DynamoDB_20120810.BatchExecuteStatement"
}
export declare class BatchExecuteStatementRequest extends SpeakeasyBase {
    batchExecuteStatementInput: shared.BatchExecuteStatementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchExecuteStatementXAmzTargetEnum;
}
export declare class BatchExecuteStatementResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchExecuteStatementOutput?: shared.BatchExecuteStatementOutput;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * RequestLimitExceeded
     */
    requestLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
