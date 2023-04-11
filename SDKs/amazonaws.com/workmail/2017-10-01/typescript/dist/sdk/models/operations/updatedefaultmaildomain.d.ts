import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDefaultMailDomainXAmzTargetEnum {
    WorkMailServiceUpdateDefaultMailDomain = "WorkMailService.UpdateDefaultMailDomain"
}
export declare class UpdateDefaultMailDomainRequest extends SpeakeasyBase {
    updateDefaultMailDomainRequest: shared.UpdateDefaultMailDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDefaultMailDomainXAmzTargetEnum;
}
export declare class UpdateDefaultMailDomainResponse extends SpeakeasyBase {
    contentType: string;
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
     * Success
     */
    updateDefaultMailDomainResponse?: Record<string, any>;
}
