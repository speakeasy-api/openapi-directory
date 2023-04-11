import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAuthEventFeedbackXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceUpdateAuthEventFeedback = "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback"
}
export declare class UpdateAuthEventFeedbackRequest extends SpeakeasyBase {
    updateAuthEventFeedbackRequest: shared.UpdateAuthEventFeedbackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAuthEventFeedbackXAmzTargetEnum;
}
export declare class UpdateAuthEventFeedbackResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateAuthEventFeedbackResponse?: Record<string, any>;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
    /**
     * UserPoolAddOnNotEnabledException
     */
    userPoolAddOnNotEnabledException?: any;
}
