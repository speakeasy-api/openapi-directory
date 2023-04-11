import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchExecuteStatementXAmzTargetEnum {
    RedshiftDataBatchExecuteStatement = "RedshiftData.BatchExecuteStatement"
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
     * ActiveStatementsExceededException
     */
    activeStatementsExceededException?: any;
    /**
     * BatchExecuteStatementException
     */
    batchExecuteStatementException?: any;
    /**
     * Success
     */
    batchExecuteStatementOutput?: shared.BatchExecuteStatementOutput;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
