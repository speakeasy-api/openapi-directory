import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBillingPlanUsageResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    billingPlanUsage?: shared.BillingPlanUsage;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
