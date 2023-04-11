import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdAccountingsJournalRequest extends SpeakeasyBase {
    /**
     * accounting dates of the document
     */
    accountingDate?: string;
    /**
     * class of the document
     */
    class?: string;
    /**
     * code of the document
     */
    code?: string;
    /**
     * delivery dates of the document
     */
    deliveryDate?: string;
    /**
     * numbers of the document
     */
    number?: number;
    /**
     * Name of the target folder of the document
     */
    targetFolderName?: string;
    /**
     * workbook of the document
     */
    workbook?: string;
    /**
     * yearmonth of the document
     */
    yearMonth?: string;
    /**
     * Id of the customer folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdAccountingsJournal200ApplicationJSONTargetFolder extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum GetSpacesSpaceIdFoldersIdAccountingsJournal200ApplicationJSONWorkbookEnum {
    Customer = "customer",
    Provider = "provider",
    Bank = "bank",
    CashWoucher = "cashWoucher",
    Fiscal = "fiscal",
    Insurance = "insurance",
    Social = "social",
    Other = "other",
    Permanent = "permanent"
}
export declare class GetSpacesSpaceIdFoldersIdAccountingsJournal200ApplicationJSON extends SpeakeasyBase {
    accountingDate?: string;
    accountingDocumentId?: string;
    class?: string;
    code?: string;
    deliveryDate?: string;
    id?: string;
    number?: number;
    targetFolder?: GetSpacesSpaceIdFoldersIdAccountingsJournal200ApplicationJSONTargetFolder;
    workbook?: GetSpacesSpaceIdFoldersIdAccountingsJournal200ApplicationJSONWorkbookEnum;
    yearMonth?: string;
}
export declare class GetSpacesSpaceIdFoldersIdAccountingsJournalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of accountings document (journal)
     */
    getSpacesSpaceIdFoldersIdAccountingsJournal200ApplicationJSONObjects?: GetSpacesSpaceIdFoldersIdAccountingsJournal200ApplicationJSON[];
}
