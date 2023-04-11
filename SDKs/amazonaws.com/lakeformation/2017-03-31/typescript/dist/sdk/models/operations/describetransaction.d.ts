import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeTransactionRequestBody extends SpeakeasyBase {
    /**
     * The transaction for which to return status.
     */
    transactionId: string;
}
export declare class DescribeTransactionRequest extends SpeakeasyBase {
    requestBody: DescribeTransactionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTransactionResponse?: shared.DescribeTransactionResponse;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
