import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetUserPoolMfaConfigXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceSetUserPoolMfaConfig = "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig"
}
export declare class SetUserPoolMfaConfigRequest extends SpeakeasyBase {
    setUserPoolMfaConfigRequest: shared.SetUserPoolMfaConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetUserPoolMfaConfigXAmzTargetEnum;
}
export declare class SetUserPoolMfaConfigResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    setUserPoolMfaConfigResponse?: shared.SetUserPoolMfaConfigResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
