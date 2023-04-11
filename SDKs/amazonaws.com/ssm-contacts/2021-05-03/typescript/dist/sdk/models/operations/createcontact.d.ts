import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateContactXAmzTargetEnum {
    SSMContactsCreateContact = "SSMContacts.CreateContact"
}
export declare class CreateContactRequest extends SpeakeasyBase {
    createContactRequest: shared.CreateContactRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContactXAmzTargetEnum;
}
export declare class CreateContactResponse extends SpeakeasyBase {
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
    createContactResult?: shared.CreateContactResult;
    /**
     * DataEncryptionException
     */
    dataEncryptionException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
