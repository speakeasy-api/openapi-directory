import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2TypeEnum {
    Contract = "contract",
    EngagementLetter = "engagement-letter",
    Amendment = "amendment",
    PurchaseOrder = "purchase-order",
    DeliveryOrder = "delivery-order",
    Quotation = "quotation",
    Other = "other"
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2Accounting;
    amount?: string;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    designation?: string;
    file: PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2File;
    reference?: string;
    startDate?: string;
    title: string;
    type?: PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson2TypeEnum;
}
export declare enum PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson1TypeEnum {
    Contract = "contract",
    EngagementLetter = "engagement-letter",
    Amendment = "amendment",
    PurchaseOrder = "purchase-order",
    DeliveryOrder = "delivery-order",
    Quotation = "quotation",
    Other = "other"
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson1 extends SpeakeasyBase {
    amount?: string;
    designation?: string;
    documentId: string;
    reference?: string;
    startDate?: string;
    type?: PostSpacesSpaceIdFoldersIdContractualDocumentsApplicationJson1TypeEnum;
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsJsonRequest extends SpeakeasyBase {
    /**
     * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: any;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdContractualDocumentsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdContractualDocumentsJson201ApplicationJSON;
}
