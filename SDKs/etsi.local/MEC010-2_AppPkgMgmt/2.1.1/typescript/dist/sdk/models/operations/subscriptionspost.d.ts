import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscriptionsPOSTResponse extends SpeakeasyBase {
    /**
     * Successful response for created subscription
     */
    appPkgSubscriptionInfo?: shared.AppPkgSubscriptionInfo;
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
