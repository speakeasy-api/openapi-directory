import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateDispatchEventRequestBody extends SpeakeasyBase {
    /**
     * JSON payload with extra information about the webhook event that your action or worklow may use.
     */
    clientPayload?: Record<string, any>;
    /**
     * A custom webhook event name.
     */
    eventType: string;
}
export declare class ReposCreateDispatchEventRequest extends SpeakeasyBase {
    requestBody: ReposCreateDispatchEventRequestBody;
    owner: string;
    repo: string;
}
export declare class ReposCreateDispatchEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
