import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApiDestinationXAmzTargetEnum {
    AWSEventsDeleteApiDestination = "AWSEvents.DeleteApiDestination"
}
export declare class DeleteApiDestinationRequest extends SpeakeasyBase {
    deleteApiDestinationRequest: shared.DeleteApiDestinationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApiDestinationXAmzTargetEnum;
}
export declare class DeleteApiDestinationResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApiDestinationResponse?: Record<string, any>;
    /**
     * InternalException
     */
    internalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
