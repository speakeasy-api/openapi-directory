import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLogSubscriptionXAmzTargetEnum {
    DirectoryService20150416CreateLogSubscription = "DirectoryService_20150416.CreateLogSubscription"
}
export declare class CreateLogSubscriptionRequest extends SpeakeasyBase {
    createLogSubscriptionRequest: shared.CreateLogSubscriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLogSubscriptionXAmzTargetEnum;
}
export declare class CreateLogSubscriptionResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createLogSubscriptionResult?: Record<string, any>;
    /**
     * EntityAlreadyExistsException
     */
    entityAlreadyExistsException?: any;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
