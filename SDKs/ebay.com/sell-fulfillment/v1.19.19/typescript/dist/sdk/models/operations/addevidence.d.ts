import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const AddEvidenceServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class AddEvidenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class AddEvidenceRequest extends SpeakeasyBase {
    addEvidencePaymentDisputeRequest?: shared.AddEvidencePaymentDisputeRequest;
    /**
     * This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to add evidence for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
     */
    paymentDisputeId: string;
}
export declare class AddEvidenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addEvidencePaymentDisputeResponse?: shared.AddEvidencePaymentDisputeResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
