import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUICustomizationXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGetUICustomization = "AWSCognitoIdentityProviderService.GetUICustomization"
}
export declare class GetUICustomizationRequest extends SpeakeasyBase {
    getUICustomizationRequest: shared.GetUICustomizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUICustomizationXAmzTargetEnum;
}
export declare class GetUICustomizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getUICustomizationResponse?: shared.GetUICustomizationResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
}
