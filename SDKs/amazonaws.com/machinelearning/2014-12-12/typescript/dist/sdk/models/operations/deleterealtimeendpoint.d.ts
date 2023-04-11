import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRealtimeEndpointXAmzTargetEnum {
    AmazonML20141212DeleteRealtimeEndpoint = "AmazonML_20141212.DeleteRealtimeEndpoint"
}
export declare class DeleteRealtimeEndpointRequest extends SpeakeasyBase {
    deleteRealtimeEndpointInput: shared.DeleteRealtimeEndpointInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRealtimeEndpointXAmzTargetEnum;
}
export declare class DeleteRealtimeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRealtimeEndpointOutput?: shared.DeleteRealtimeEndpointOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
