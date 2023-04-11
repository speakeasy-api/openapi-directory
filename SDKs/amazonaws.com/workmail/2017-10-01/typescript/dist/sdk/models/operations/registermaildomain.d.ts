import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterMailDomainXAmzTargetEnum {
    WorkMailServiceRegisterMailDomain = "WorkMailService.RegisterMailDomain"
}
export declare class RegisterMailDomainRequest extends SpeakeasyBase {
    registerMailDomainRequest: shared.RegisterMailDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterMailDomainXAmzTargetEnum;
}
export declare class RegisterMailDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
    /**
     * Success
     */
    registerMailDomainResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
