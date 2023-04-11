import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUserAttributesXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceUpdateUserAttributes = "AWSCognitoIdentityProviderService.UpdateUserAttributes"
}
export declare class UpdateUserAttributesRequest extends SpeakeasyBase {
    updateUserAttributesRequest: shared.UpdateUserAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserAttributesXAmzTargetEnum;
}
export declare class UpdateUserAttributesResponse extends SpeakeasyBase {
    /**
     * AliasExistsException
     */
    aliasExistsException?: any;
    /**
     * CodeDeliveryFailureException
     */
    codeDeliveryFailureException?: any;
    /**
     * CodeMismatchException
     */
    codeMismatchException?: any;
    contentType: string;
    /**
     * ExpiredCodeException
     */
    expiredCodeException?: any;
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
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * PasswordResetRequiredException
     */
    passwordResetRequiredException?: any;
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
     * UnexpectedLambdaException
     */
    unexpectedLambdaException?: any;
    /**
     * Success
     */
    updateUserAttributesResponse?: shared.UpdateUserAttributesResponse;
    /**
     * UserLambdaValidationException
     */
    userLambdaValidationException?: any;
    /**
     * UserNotConfirmedException
     */
    userNotConfirmedException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
