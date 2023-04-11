import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetUICustomizationXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceSetUICustomization = "AWSCognitoIdentityProviderService.SetUICustomization"
}
export declare class SetUICustomizationRequest extends SpeakeasyBase {
    setUICustomizationRequest: shared.SetUICustomizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetUICustomizationXAmzTargetEnum;
}
export declare class SetUICustomizationResponse extends SpeakeasyBase {
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
    setUICustomizationResponse?: shared.SetUICustomizationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
