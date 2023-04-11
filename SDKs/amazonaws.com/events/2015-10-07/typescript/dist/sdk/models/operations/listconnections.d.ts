import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListConnectionsXAmzTargetEnum {
    AWSEventsListConnections = "AWSEvents.ListConnections"
}
export declare class ListConnectionsRequest extends SpeakeasyBase {
    listConnectionsRequest: shared.ListConnectionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListConnectionsXAmzTargetEnum;
}
export declare class ListConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
