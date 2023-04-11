import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEventBusesXAmzTargetEnum {
    AWSEventsListEventBuses = "AWSEvents.ListEventBuses"
}
export declare class ListEventBusesRequest extends SpeakeasyBase {
    listEventBusesRequest: shared.ListEventBusesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventBusesXAmzTargetEnum;
}
export declare class ListEventBusesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listEventBusesResponse?: shared.ListEventBusesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
