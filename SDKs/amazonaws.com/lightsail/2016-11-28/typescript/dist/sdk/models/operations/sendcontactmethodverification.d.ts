import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendContactMethodVerificationXAmzTargetEnum {
    Lightsail20161128SendContactMethodVerification = "Lightsail_20161128.SendContactMethodVerification"
}
export declare class SendContactMethodVerificationRequest extends SpeakeasyBase {
    sendContactMethodVerificationRequest: shared.SendContactMethodVerificationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendContactMethodVerificationXAmzTargetEnum;
}
export declare class SendContactMethodVerificationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    /**
     * Success
     */
    sendContactMethodVerificationResult?: shared.SendContactMethodVerificationResult;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
