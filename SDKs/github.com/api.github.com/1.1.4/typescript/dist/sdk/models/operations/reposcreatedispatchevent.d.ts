import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateDispatchEventRequestBody extends SpeakeasyBase {
    /**
     * JSON payload with extra information about the webhook event that your action or workflow may use. The maximum number of top-level properties is 10.
     */
    clientPayload?: Record<string, any>;
    /**
     * A custom webhook event name. Must be 100 characters or fewer.
     */
    eventType: string;
}
export declare class ReposCreateDispatchEventRequest extends SpeakeasyBase {
    requestBody: ReposCreateDispatchEventRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateDispatchEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
