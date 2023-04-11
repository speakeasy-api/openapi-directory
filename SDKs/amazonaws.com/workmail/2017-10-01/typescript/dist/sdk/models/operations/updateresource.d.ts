import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateResourceXAmzTargetEnum {
    WorkMailServiceUpdateResource = "WorkMailService.UpdateResource"
}
export declare class UpdateResourceRequest extends SpeakeasyBase {
    updateResourceRequest: shared.UpdateResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceXAmzTargetEnum;
}
export declare class UpdateResourceResponse extends SpeakeasyBase {
    contentType: string;
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
     * InvalidConfigurationException
     */
    invalidConfigurationException?: any;
    /**
     * MailDomainNotFoundException
     */
    mailDomainNotFoundException?: any;
    /**
     * MailDomainStateException
     */
    mailDomainStateException?: any;
    /**
     * NameAvailabilityException
     */
    nameAvailabilityException?: any;
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
     * Success
     */
    updateResourceResponse?: Record<string, any>;
}
