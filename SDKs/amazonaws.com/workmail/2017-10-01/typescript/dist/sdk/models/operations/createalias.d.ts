import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAliasXAmzTargetEnum {
    WorkMailServiceCreateAlias = "WorkMailService.CreateAlias"
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    createAliasRequest: shared.CreateAliasRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAliasXAmzTargetEnum;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAliasResponse?: Record<string, any>;
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
     * LimitExceededException
     */
    limitExceededException?: any;
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
}
