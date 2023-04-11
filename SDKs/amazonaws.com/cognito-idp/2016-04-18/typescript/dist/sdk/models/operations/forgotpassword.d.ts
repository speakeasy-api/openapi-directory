import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ForgotPasswordXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceForgotPassword = "AWSCognitoIdentityProviderService.ForgotPassword"
}
export declare class ForgotPasswordRequest extends SpeakeasyBase {
    forgotPasswordRequest: shared.ForgotPasswordRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ForgotPasswordXAmzTargetEnum;
}
export declare class ForgotPasswordResponse extends SpeakeasyBase {
    /**
     * CodeDeliveryFailureException
     */
    codeDeliveryFailureException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * Success
     */
    forgotPasswordResponse?: shared.ForgotPasswordResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidEmailRoleAccessPolicyException
     */
    invalidEmailRoleAccessPolicyException?: any;
    /**
     * InvalidLambdaResponseException
     */
    invalidLambdaResponseException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidSmsRoleAccessPolicyException
     */
    invalidSmsRoleAccessPolicyException?: any;
    /**
     * InvalidSmsRoleTrustRelationshipException
     */
    invalidSmsRoleTrustRelationshipException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
     * UnexpectedLambdaException
     */
    unexpectedLambdaException?: any;
    /**
     * UserLambdaValidationException
     */
    userLambdaValidationException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
