import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateContactChannelXAmzTargetEnum {
    SSMContactsCreateContactChannel = "SSMContacts.CreateContactChannel"
}
export declare class CreateContactChannelRequest extends SpeakeasyBase {
    createContactChannelRequest: shared.CreateContactChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContactChannelXAmzTargetEnum;
}
export declare class CreateContactChannelResponse extends SpeakeasyBase {
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
    createContactChannelResult?: shared.CreateContactChannelResult;
    /**
     * DataEncryptionException
     */
    dataEncryptionException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
