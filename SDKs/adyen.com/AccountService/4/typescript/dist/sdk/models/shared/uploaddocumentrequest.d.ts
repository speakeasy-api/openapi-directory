import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentDetail } from "./documentdetail";
export declare class UploadDocumentRequest extends SpeakeasyBase {
    /**
     * The code of the account holder, for which the document is submitted.
     */
    accountHolderCode?: string;
    /**
     * The unique ID of the bank account, for which the document is submitted.
     *
     * @remarks
     * >Required if the document is being submitted in order to verify a bank account.
     */
    bankAccountUUID?: string;
    /**
     * The content of the document, in Base64-encoded string format.
     *
     * @remarks
     *
     * To learn about document requirements, refer to [Verification checks](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks).
     */
    documentContent: string;
    documentDetail: DocumentDetail;
    /**
     * The code of the shareholder, for which the document is submitted.
     *
     * @remarks
     * >Required if the document is being submitted in order to verify a shareholder.
     */
    shareholderCode?: string;
}
