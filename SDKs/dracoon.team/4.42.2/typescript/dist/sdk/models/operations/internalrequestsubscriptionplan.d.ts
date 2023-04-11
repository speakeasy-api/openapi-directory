import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InternalRequestSubscriptionPlanRequest extends SpeakeasyBase {
    /**
     * Service Authentication token
     */
    xSdsServiceToken: string;
}
export declare class InternalRequestSubscriptionPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    subscriptionPlanResponse?: shared.SubscriptionPlanResponse;
}
