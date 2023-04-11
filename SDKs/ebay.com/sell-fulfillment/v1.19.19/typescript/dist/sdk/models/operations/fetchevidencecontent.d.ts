import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const FetchEvidenceContentServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class FetchEvidenceContentSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class FetchEvidenceContentRequest extends SpeakeasyBase {
    /**
     * The identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the <strong>evidence</strong> array in the <strong>getPaymentDispute</strong> response.<br><br>Below is an example of the syntax to use for this query parameter:<br><br><code>evidence_id=12345678</code>
     */
    evidenceId: string;
    /**
     * The identifier of an evidential file. This file must belong to the evidential file set identified through the <strong>evidence_id</strong> query parameter. The identifier of each evidential file is returned under the <strong>evidence.files</strong> array in the <strong>getPaymentDispute</strong> response. <br><br>Below is an example of the syntax to use for this query parameter:<br><br><code>file_id=12345678</code>
     */
    fileId: string;
    /**
     * The identifier of the payment dispute. The identifier of each payment dispute is returned in the <strong>getPaymentDisputeSummaries</strong> response. This identifier is passed in as a path parameter at the end of the call URI.
     */
    paymentDisputeId: string;
}
export declare class FetchEvidenceContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
