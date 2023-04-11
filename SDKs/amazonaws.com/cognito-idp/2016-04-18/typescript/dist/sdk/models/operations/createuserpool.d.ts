import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserPoolXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceCreateUserPool = "AWSCognitoIdentityProviderService.CreateUserPool"
}
export declare class CreateUserPoolRequest extends SpeakeasyBase {
    createUserPoolRequest: shared.CreateUserPoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserPoolXAmzTargetEnum;
}
export declare class CreateUserPoolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUserPoolResponse?: shared.CreateUserPoolResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidEmailRoleAccessPolicyException
     */
    invalidEmailRoleAccessPolicyException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UserPoolTaggingException
     */
    userPoolTaggingException?: any;
}
