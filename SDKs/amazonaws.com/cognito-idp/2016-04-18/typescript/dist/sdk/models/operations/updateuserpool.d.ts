import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUserPoolXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceUpdateUserPool = "AWSCognitoIdentityProviderService.UpdateUserPool"
}
export declare class UpdateUserPoolRequest extends SpeakeasyBase {
    updateUserPoolRequest: shared.UpdateUserPoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserPoolXAmzTargetEnum;
}
export declare class UpdateUserPoolResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateUserPoolResponse?: Record<string, any>;
    /**
     * UserImportInProgressException
     */
    userImportInProgressException?: any;
    /**
     * UserPoolTaggingException
     */
    userPoolTaggingException?: any;
}
