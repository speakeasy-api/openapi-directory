import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNotificationXAmzTargetEnum {
    AWSBudgetServiceGatewayUpdateNotification = "AWSBudgetServiceGateway.UpdateNotification"
}
export declare class UpdateNotificationRequest extends SpeakeasyBase {
    updateNotificationRequest: shared.UpdateNotificationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotificationXAmzTargetEnum;
}
export declare class UpdateNotificationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DuplicateRecordException
     */
    duplicateRecordException?: any;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateNotificationResponse?: Record<string, any>;
}
