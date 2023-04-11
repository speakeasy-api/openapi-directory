import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResendConfirmationCodeXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceResendConfirmationCode = "AWSCognitoIdentityProviderService.ResendConfirmationCode"
}
export declare class ResendConfirmationCodeRequest extends SpeakeasyBase {
    resendConfirmationCodeRequest: shared.ResendConfirmationCodeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResendConfirmationCodeXAmzTargetEnum;
}
export declare class ResendConfirmationCodeResponse extends SpeakeasyBase {
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
     * Success
     */
    resendConfirmationCodeResponse?: shared.ResendConfirmationCodeResponse;
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
