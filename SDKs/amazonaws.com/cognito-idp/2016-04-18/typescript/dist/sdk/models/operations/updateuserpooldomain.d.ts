import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUserPoolDomainXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceUpdateUserPoolDomain = "AWSCognitoIdentityProviderService.UpdateUserPoolDomain"
}
export declare class UpdateUserPoolDomainRequest extends SpeakeasyBase {
    updateUserPoolDomainRequest: shared.UpdateUserPoolDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserPoolDomainXAmzTargetEnum;
}
export declare class UpdateUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateUserPoolDomainResponse?: shared.UpdateUserPoolDomainResponse;
}
