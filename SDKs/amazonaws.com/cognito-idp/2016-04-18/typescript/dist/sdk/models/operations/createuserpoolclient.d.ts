import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserPoolClientXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceCreateUserPoolClient = "AWSCognitoIdentityProviderService.CreateUserPoolClient"
}
export declare class CreateUserPoolClientRequest extends SpeakeasyBase {
    createUserPoolClientRequest: shared.CreateUserPoolClientRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserPoolClientXAmzTargetEnum;
}
export declare class CreateUserPoolClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUserPoolClientResponse?: shared.CreateUserPoolClientResponse;
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
     * ScopeDoesNotExistException
     */
    scopeDoesNotExistException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
