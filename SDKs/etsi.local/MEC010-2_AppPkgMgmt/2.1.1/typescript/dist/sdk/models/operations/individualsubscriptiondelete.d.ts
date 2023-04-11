import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IndividualSubscriptionDELETERequest extends SpeakeasyBase {
    /**
     * Identifier of an individual subscription to notifications about application package changes
     */
    subscriptionId: string;
}
export declare class IndividualSubscriptionDELETEResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized :  used when the client did not submit credentials.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
