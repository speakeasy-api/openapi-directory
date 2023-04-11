import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserPoolDomainXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceCreateUserPoolDomain = "AWSCognitoIdentityProviderService.CreateUserPoolDomain"
}
export declare class CreateUserPoolDomainRequest extends SpeakeasyBase {
    createUserPoolDomainRequest: shared.CreateUserPoolDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserPoolDomainXAmzTargetEnum;
}
export declare class CreateUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUserPoolDomainResponse?: shared.CreateUserPoolDomainResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
