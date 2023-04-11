import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEndpointsXAmzTargetEnum {
    AWSEventsListEndpoints = "AWSEvents.ListEndpoints"
}
export declare class ListEndpointsRequest extends SpeakeasyBase {
    listEndpointsRequest: shared.ListEndpointsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEndpointsXAmzTargetEnum;
}
export declare class ListEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listEndpointsResponse?: shared.ListEndpointsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
