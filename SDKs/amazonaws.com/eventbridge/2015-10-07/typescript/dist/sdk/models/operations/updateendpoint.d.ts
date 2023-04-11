import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEndpointXAmzTargetEnum {
    AWSEventsUpdateEndpoint = "AWSEvents.UpdateEndpoint"
}
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    updateEndpointRequest: shared.UpdateEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointXAmzTargetEnum;
}
export declare class UpdateEndpointResponse extends SpeakeasyBase {
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateEndpointResponse?: shared.UpdateEndpointResponse;
}
