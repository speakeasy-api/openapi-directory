import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExecuteStatementXAmzTargetEnum {
    RedshiftDataExecuteStatement = "RedshiftData.ExecuteStatement"
}
export declare class ExecuteStatementRequest extends SpeakeasyBase {
    executeStatementInput: shared.ExecuteStatementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteStatementXAmzTargetEnum;
}
export declare class ExecuteStatementResponse extends SpeakeasyBase {
    /**
     * ActiveStatementsExceededException
     */
    activeStatementsExceededException?: any;
    contentType: string;
    /**
     * ExecuteStatementException
     */
    executeStatementException?: any;
    /**
     * Success
     */
    executeStatementOutput?: shared.ExecuteStatementOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
