import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of event.
 */
export declare enum PostExternalEventsRequestBodyStatusEnum {
    Success = "success",
    Failure = "failure",
    PartialFailure = "partial_failure",
    InProgress = "in_progress",
    Skipped = "skipped"
}
export declare class PostExternalEventsRequestBody extends SpeakeasyBase {
    /**
     * Event body
     */
    body: string;
    /**
     * Status of event.
     */
    status: PostExternalEventsRequestBodyStatusEnum;
}
export declare class PostExternalEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The ExternalEvents object.
     */
    externalEventEntity?: shared.ExternalEventEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
