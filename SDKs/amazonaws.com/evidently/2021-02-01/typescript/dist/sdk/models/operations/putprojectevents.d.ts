import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutProjectEventsRequestBody extends SpeakeasyBase {
    /**
     * An array of event structures that contain the performance data that is being sent to Evidently.
     */
    events: shared.Event[];
}
export declare class PutProjectEventsRequest extends SpeakeasyBase {
    requestBody: PutProjectEventsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ARN of the project to write the events to.
     */
    project: string;
}
export declare class PutProjectEventsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    putProjectEventsResponse?: shared.PutProjectEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
