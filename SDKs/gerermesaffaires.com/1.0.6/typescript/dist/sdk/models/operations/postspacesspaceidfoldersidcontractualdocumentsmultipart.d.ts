import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
export declare enum PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataTypeEnum {
    Contract = "contract",
    EngagementLetter = "engagement-letter",
    Amendment = "amendment",
    PurchaseOrder = "purchase-order",
    DeliveryOrder = "delivery-order",
    Quotation = "quotation",
    Other = "other"
}
/**
 * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataAccounting;
    amount?: string;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    designation?: string;
    file: PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataFile;
    reference?: string;
    startDate?: string;
    title: string;
    type?: PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormDataTypeEnum;
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartRequest extends SpeakeasyBase {
    /**
     * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartFormData1;
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
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdContractualDocumentsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdContractualDocumentsMultipart201ApplicationJSON;
}
