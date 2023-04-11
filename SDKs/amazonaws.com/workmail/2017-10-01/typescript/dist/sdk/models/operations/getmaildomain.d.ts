import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMailDomainXAmzTargetEnum {
    WorkMailServiceGetMailDomain = "WorkMailService.GetMailDomain"
}
export declare class GetMailDomainRequest extends SpeakeasyBase {
    getMailDomainRequest: shared.GetMailDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMailDomainXAmzTargetEnum;
}
export declare class GetMailDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getMailDomainResponse?: shared.GetMailDomainResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MailDomainNotFoundException
     */
    mailDomainNotFoundException?: any;
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
