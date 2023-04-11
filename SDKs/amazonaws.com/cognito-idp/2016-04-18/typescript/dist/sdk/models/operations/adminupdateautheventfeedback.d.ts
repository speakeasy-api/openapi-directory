import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminUpdateAuthEventFeedbackXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback = "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback"
}
export declare class AdminUpdateAuthEventFeedbackRequest extends SpeakeasyBase {
    adminUpdateAuthEventFeedbackRequest: shared.AdminUpdateAuthEventFeedbackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUpdateAuthEventFeedbackXAmzTargetEnum;
}
export declare class AdminUpdateAuthEventFeedbackResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminUpdateAuthEventFeedbackResponse?: Record<string, any>;
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
     * UserNotFoundException
     */
    userNotFoundException?: any;
    /**
     * UserPoolAddOnNotEnabledException
     */
    userPoolAddOnNotEnabledException?: any;
}
