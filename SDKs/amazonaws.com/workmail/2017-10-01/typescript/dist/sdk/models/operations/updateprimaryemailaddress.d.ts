import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePrimaryEmailAddressXAmzTargetEnum {
    WorkMailServiceUpdatePrimaryEmailAddress = "WorkMailService.UpdatePrimaryEmailAddress"
}
export declare class UpdatePrimaryEmailAddressRequest extends SpeakeasyBase {
    updatePrimaryEmailAddressRequest: shared.UpdatePrimaryEmailAddressRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePrimaryEmailAddressXAmzTargetEnum;
}
export declare class UpdatePrimaryEmailAddressResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * Success
     */
    updatePrimaryEmailAddressResponse?: Record<string, any>;
}
