import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscriptionsGETResponse extends SpeakeasyBase {
    /**
     * List of zero or more subscriptions
     */
    appPkgSubscriptionLinkList?: shared.AppPkgSubscriptionLinkList;
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
