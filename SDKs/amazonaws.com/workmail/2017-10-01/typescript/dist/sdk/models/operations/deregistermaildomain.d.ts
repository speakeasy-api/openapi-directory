import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterMailDomainXAmzTargetEnum {
    WorkMailServiceDeregisterMailDomain = "WorkMailService.DeregisterMailDomain"
}
export declare class DeregisterMailDomainRequest extends SpeakeasyBase {
    deregisterMailDomainRequest: shared.DeregisterMailDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterMailDomainXAmzTargetEnum;
}
export declare class DeregisterMailDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterMailDomainResponse?: Record<string, any>;
    /**
     * InvalidCustomSesConfigurationException
     */
    invalidCustomSesConfigurationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MailDomainInUseException
     */
    mailDomainInUseException?: any;
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
}
