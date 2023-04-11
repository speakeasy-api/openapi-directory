import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterToWorkMailXAmzTargetEnum {
    WorkMailServiceRegisterToWorkMail = "WorkMailService.RegisterToWorkMail"
}
export declare class RegisterToWorkMailRequest extends SpeakeasyBase {
    registerToWorkMailRequest: shared.RegisterToWorkMailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterToWorkMailXAmzTargetEnum;
}
export declare class RegisterToWorkMailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DirectoryServiceAuthenticationFailedException
     */
    directoryServiceAuthenticationFailedException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * EmailAddressInUseException
     */
    emailAddressInUseException?: any;
    /**
     * EntityAlreadyRegisteredException
     */
    entityAlreadyRegisteredException?: any;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MailDomainNotFoundException
     */
    mailDomainNotFoundException?: any;
    /**
     * MailDomainStateException
     */
    mailDomainStateException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * Success
     */
    registerToWorkMailResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
