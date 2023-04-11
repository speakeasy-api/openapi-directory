import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminUpdateUserAttributesXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminUpdateUserAttributes = "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes"
}
export declare class AdminUpdateUserAttributesRequest extends SpeakeasyBase {
    adminUpdateUserAttributesRequest: shared.AdminUpdateUserAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUpdateUserAttributesXAmzTargetEnum;
}
export declare class AdminUpdateUserAttributesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminUpdateUserAttributesResponse?: Record<string, any>;
    /**
     * AliasExistsException
     */
    aliasExistsException?: any;
    contentType: string;
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
