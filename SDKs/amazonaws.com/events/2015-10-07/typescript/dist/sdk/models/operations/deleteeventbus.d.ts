import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEventBusXAmzTargetEnum {
    AWSEventsDeleteEventBus = "AWSEvents.DeleteEventBus"
}
export declare class DeleteEventBusRequest extends SpeakeasyBase {
    deleteEventBusRequest: shared.DeleteEventBusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventBusXAmzTargetEnum;
}
export declare class DeleteEventBusResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
