import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUserPoolClientXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceUpdateUserPoolClient = "AWSCognitoIdentityProviderService.UpdateUserPoolClient"
}
export declare class UpdateUserPoolClientRequest extends SpeakeasyBase {
    updateUserPoolClientRequest: shared.UpdateUserPoolClientRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserPoolClientXAmzTargetEnum;
}
export declare class UpdateUserPoolClientResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOAuthFlowException
     */
    invalidOAuthFlowException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ScopeDoesNotExistException
     */
    scopeDoesNotExistException?: any;
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
    /**
     * Success
     */
    updateUserPoolClientResponse?: shared.UpdateUserPoolClientResponse;
}
