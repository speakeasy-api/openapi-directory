import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateNotificationXAmzTargetEnum {
    AWSBudgetServiceGatewayCreateNotification = "AWSBudgetServiceGateway.CreateNotification"
}
export declare class CreateNotificationRequest extends SpeakeasyBase {
    createNotificationRequest: shared.CreateNotificationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNotificationXAmzTargetEnum;
}
export declare class CreateNotificationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createNotificationResponse?: Record<string, any>;
    /**
     * CreationLimitExceededException
     */
    creationLimitExceededException?: any;
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
}
