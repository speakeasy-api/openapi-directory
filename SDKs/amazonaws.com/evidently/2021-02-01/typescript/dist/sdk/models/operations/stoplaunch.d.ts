import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify whether to consider the launch as <code>COMPLETED</code> or <code>CANCELLED</code> after it stops.
 */
export declare enum StopLaunchRequestBodyDesiredStateEnum {
    Completed = "COMPLETED",
    Cancelled = "CANCELLED"
}
export declare class StopLaunchRequestBody extends SpeakeasyBase {
    /**
     * Specify whether to consider the launch as <code>COMPLETED</code> or <code>CANCELLED</code> after it stops.
     */
    desiredState?: StopLaunchRequestBodyDesiredStateEnum;
    /**
     * A string that describes why you are stopping the launch.
     */
    reason?: string;
}
export declare class StopLaunchRequest extends SpeakeasyBase {
    requestBody: StopLaunchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the launch to stop.
     */
    launch: string;
    /**
     * The name or ARN of the project that contains the launch that you want to stop.
     */
    project: string;
}
export declare class StopLaunchResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopLaunchResponse?: shared.StopLaunchResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
