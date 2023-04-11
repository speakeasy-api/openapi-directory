import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivitySetThreadSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * Whether to block all notifications from a thread.
     */
    ignored?: boolean;
}
export declare class ActivitySetThreadSubscriptionRequest extends SpeakeasyBase {
    requestBody?: ActivitySetThreadSubscriptionRequestBody;
    /**
     * thread_id parameter
     */
    threadId: number;
}
export declare class ActivitySetThreadSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    threadSubscription?: shared.ThreadSubscription;
}
