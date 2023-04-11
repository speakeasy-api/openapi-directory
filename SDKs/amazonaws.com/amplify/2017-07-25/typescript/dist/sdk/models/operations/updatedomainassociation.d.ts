import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDomainAssociationRequestBody extends SpeakeasyBase {
    /**
     *  Sets the branch patterns for automatic subdomain creation.
     */
    autoSubDomainCreationPatterns?: string[];
    /**
     *  The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
     */
    autoSubDomainIAMRole?: string;
    /**
     *  Enables the automated creation of subdomains for branches.
     */
    enableAutoSubDomain?: boolean;
    /**
     *  Describes the settings for the subdomain.
     */
    subDomainSettings?: shared.SubDomainSetting[];
}
export declare class UpdateDomainAssociationRequest extends SpeakeasyBase {
    requestBody: UpdateDomainAssociationRequestBody;
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
    /**
     *  The name of the domain.
     */
    domainName: string;
}
export declare class UpdateDomainAssociationResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * DependentServiceFailureException
     */
    dependentServiceFailureException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
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
    /**
     * Success
     */
    updateDomainAssociationResult?: shared.UpdateDomainAssociationResult;
}
