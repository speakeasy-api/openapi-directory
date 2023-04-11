import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateEvidenceServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class UpdateEvidenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateEvidenceRequest extends SpeakeasyBase {
    updateEvidencePaymentDisputeRequest?: shared.UpdateEvidencePaymentDisputeRequest;
    /**
     * This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to update the evidence set for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
     */
    paymentDisputeId: string;
}
export declare class UpdateEvidenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
