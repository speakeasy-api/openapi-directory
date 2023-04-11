import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetContactChannelXAmzTargetEnum {
    SSMContactsGetContactChannel = "SSMContacts.GetContactChannel"
}
export declare class GetContactChannelRequest extends SpeakeasyBase {
    getContactChannelRequest: shared.GetContactChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContactChannelXAmzTargetEnum;
}
export declare class GetContactChannelResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DataEncryptionException
     */
    dataEncryptionException?: any;
    /**
     * Success
     */
    getContactChannelResult?: shared.GetContactChannelResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
