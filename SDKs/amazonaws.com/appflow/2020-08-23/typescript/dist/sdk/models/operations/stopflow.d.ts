import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopFlowRequestBody extends SpeakeasyBase {
    /**
     *  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
     */
    flowName: string;
}
export declare class StopFlowRequest extends SpeakeasyBase {
    requestBody: StopFlowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopFlowResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopFlowResponse?: shared.StopFlowResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
