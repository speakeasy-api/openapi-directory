import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLogSubscriptionXAmzTargetEnum {
    DirectoryService20150416DeleteLogSubscription = "DirectoryService_20150416.DeleteLogSubscription"
}
export declare class DeleteLogSubscriptionRequest extends SpeakeasyBase {
    deleteLogSubscriptionRequest: shared.DeleteLogSubscriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLogSubscriptionXAmzTargetEnum;
}
export declare class DeleteLogSubscriptionResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteLogSubscriptionResult?: Record<string, any>;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
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
