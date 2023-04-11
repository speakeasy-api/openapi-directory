import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetRiskConfigurationXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceSetRiskConfiguration = "AWSCognitoIdentityProviderService.SetRiskConfiguration"
}
export declare class SetRiskConfigurationRequest extends SpeakeasyBase {
    setRiskConfigurationRequest: shared.SetRiskConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetRiskConfigurationXAmzTargetEnum;
}
export declare class SetRiskConfigurationResponse extends SpeakeasyBase {
    /**
     * CodeDeliveryFailureException
     */
    codeDeliveryFailureException?: any;
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
    setRiskConfigurationResponse?: shared.SetRiskConfigurationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UserPoolAddOnNotEnabledException
     */
    userPoolAddOnNotEnabledException?: any;
}
