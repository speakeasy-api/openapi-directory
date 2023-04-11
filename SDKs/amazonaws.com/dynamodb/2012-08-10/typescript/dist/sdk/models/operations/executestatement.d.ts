import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExecuteStatementXAmzTargetEnum {
    DynamoDB20120810ExecuteStatement = "DynamoDB_20120810.ExecuteStatement"
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
     * ConditionalCheckFailedException
     */
    conditionalCheckFailedException?: any;
    contentType: string;
    /**
     * DuplicateItemException
     */
    duplicateItemException?: any;
    /**
     * Success
     */
    executeStatementOutput?: shared.ExecuteStatementOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ItemCollectionSizeLimitExceededException
     */
    itemCollectionSizeLimitExceededException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestLimitExceeded
     */
    requestLimitExceeded?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TransactionConflictException
     */
    transactionConflictException?: any;
}
