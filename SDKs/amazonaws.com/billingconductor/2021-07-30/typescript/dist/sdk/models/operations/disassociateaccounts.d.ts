import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisassociateAccountsRequestBody extends SpeakeasyBase {
    /**
     * The array of account IDs to disassociate.
     */
    accountIds: string[];
    /**
     * The Amazon Resource Name (ARN) of the billing group that the array of account IDs will disassociate from.
     */
    arn: string;
}
export declare class DisassociateAccountsRequest extends SpeakeasyBase {
    requestBody: DisassociateAccountsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateAccountsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateAccountsOutput?: shared.DisassociateAccountsOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
