import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEventSourcesXAmzTargetEnum {
    AWSEventsListEventSources = "AWSEvents.ListEventSources"
}
export declare class ListEventSourcesRequest extends SpeakeasyBase {
    listEventSourcesRequest: shared.ListEventSourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventSourcesXAmzTargetEnum;
}
export declare class ListEventSourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listEventSourcesResponse?: shared.ListEventSourcesResponse;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
