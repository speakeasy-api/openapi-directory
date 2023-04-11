import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetPaymentDisputeServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class GetPaymentDisputeSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPaymentDisputeRequest extends SpeakeasyBase {
    /**
     * This is the unique identifier of the payment dispute. This path parameter must be passed in at the end of the call URI to identify the payment dispute to retrieve. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.
     */
    paymentDisputeId: string;
}
export declare class GetPaymentDisputeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    paymentDispute?: shared.PaymentDispute;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
