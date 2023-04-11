import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed.
 */
export declare enum StartTransactionRequestBodyTransactionTypeEnum {
    ReadAndWrite = "READ_AND_WRITE",
    ReadOnly = "READ_ONLY"
}
export declare class StartTransactionRequestBody extends SpeakeasyBase {
    /**
     * Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed.
     */
    transactionType?: StartTransactionRequestBodyTransactionTypeEnum;
}
export declare class StartTransactionRequest extends SpeakeasyBase {
    requestBody: StartTransactionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * Success
     */
    startTransactionResponse?: shared.StartTransactionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
