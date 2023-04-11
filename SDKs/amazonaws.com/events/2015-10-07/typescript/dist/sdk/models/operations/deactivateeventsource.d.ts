import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeactivateEventSourceXAmzTargetEnum {
    AWSEventsDeactivateEventSource = "AWSEvents.DeactivateEventSource"
}
export declare class DeactivateEventSourceRequest extends SpeakeasyBase {
    deactivateEventSourceRequest: shared.DeactivateEventSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeactivateEventSourceXAmzTargetEnum;
}
export declare class DeactivateEventSourceResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
