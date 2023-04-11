import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDomainAssociationRequestBody extends SpeakeasyBase {
    /**
     *  Sets the branch patterns for automatic subdomain creation.
     */
    autoSubDomainCreationPatterns?: string[];
    /**
     *  The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
     */
    autoSubDomainIAMRole?: string;
    /**
     *  The domain name for the domain association.
     */
    domainName: string;
    /**
     *  Enables the automated creation of subdomains for branches.
     */
    enableAutoSubDomain?: boolean;
    /**
     *  The setting for the subdomain.
     */
    subDomainSettings: shared.SubDomainSetting[];
}
export declare class CreateDomainAssociationRequest extends SpeakeasyBase {
    requestBody: CreateDomainAssociationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique ID for an Amplify app.
     */
    appId: string;
}
export declare class CreateDomainAssociationResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createDomainAssociationResult?: shared.CreateDomainAssociationResult;
    /**
     * DependentServiceFailureException
     */
    dependentServiceFailureException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
