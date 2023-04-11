import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUploadedDocumentsRequest extends SpeakeasyBase {
    /**
     * The code of the Account Holder for which to retrieve the documents.
     */
    accountHolderCode: string;
    /**
     * The code of the Bank Account for which to retrieve the documents.
     */
    bankAccountUUID?: string;
    /**
     * The code of the Shareholder for which to retrieve the documents.
     */
    shareholderCode?: string;
}
