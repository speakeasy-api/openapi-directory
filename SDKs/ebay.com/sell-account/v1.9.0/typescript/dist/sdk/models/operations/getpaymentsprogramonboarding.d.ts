import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentsProgramOnboardingSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPaymentsProgramOnboardingRequest extends SpeakeasyBase {
    /**
     * The eBay marketplace ID associated with the onboarding status to retrieve.
     */
    marketplaceId: string;
    /**
     * The type of payments program whose status is returned by the method.
     */
    paymentsProgramType: string;
}
export declare class GetPaymentsProgramOnboardingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    paymentsProgramOnboardingResponse?: shared.PaymentsProgramOnboardingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
