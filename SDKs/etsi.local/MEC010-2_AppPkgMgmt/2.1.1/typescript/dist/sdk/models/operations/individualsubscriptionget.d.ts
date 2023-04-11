import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IndividualSubscriptionGETRequest extends SpeakeasyBase {
    /**
     * Identifier of an individual subscription to notifications about application package changes
     */
    subscriptionId: string;
}
export declare class IndividualSubscriptionGETResponse extends SpeakeasyBase {
    /**
     * Representation of the resource.
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
