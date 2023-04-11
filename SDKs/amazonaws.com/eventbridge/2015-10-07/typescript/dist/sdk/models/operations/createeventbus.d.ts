import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEventBusXAmzTargetEnum {
    AWSEventsCreateEventBus = "AWSEvents.CreateEventBus"
}
export declare class CreateEventBusRequest extends SpeakeasyBase {
    createEventBusRequest: shared.CreateEventBusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEventBusXAmzTargetEnum;
}
export declare class CreateEventBusResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createEventBusResponse?: shared.CreateEventBusResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
