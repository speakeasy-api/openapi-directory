import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateIdentityProviderXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceCreateIdentityProvider = "AWSCognitoIdentityProviderService.CreateIdentityProvider"
}
export declare class CreateIdentityProviderRequest extends SpeakeasyBase {
    createIdentityProviderRequest: shared.CreateIdentityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIdentityProviderXAmzTargetEnum;
}
export declare class CreateIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createIdentityProviderResponse?: shared.CreateIdentityProviderResponse;
    /**
     * DuplicateProviderException
     */
    duplicateProviderException?: any;
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
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
