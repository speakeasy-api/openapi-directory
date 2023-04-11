import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityGetThreadSubscriptionForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * thread_id parameter
     */
    threadId: number;
}
export declare class ActivityGetThreadSubscriptionForAuthenticatedUserResponse extends SpeakeasyBase {
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
