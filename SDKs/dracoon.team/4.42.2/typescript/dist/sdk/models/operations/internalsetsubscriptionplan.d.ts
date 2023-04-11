import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InternalSetSubscriptionPlanRequest extends SpeakeasyBase {
    subscriptionPlanRequest: shared.SubscriptionPlanRequest;
    /**
     * Service Authentication token
     */
    xSdsServiceToken: string;
}
export declare class InternalSetSubscriptionPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    subscriptionPlanResponse?: shared.SubscriptionPlanResponse;
}
