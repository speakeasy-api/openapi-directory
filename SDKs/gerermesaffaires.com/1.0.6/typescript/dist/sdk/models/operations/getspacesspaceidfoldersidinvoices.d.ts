import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * name of value for sort
 */
export declare enum GetSpacesSpaceIdFoldersIdInvoicesSortNameEnum {
    DueDate = "DueDate",
    PaymentDate = "PaymentDate",
    InvoiceDate = "InvoiceDate",
    InclVAT = "InclVAT",
    Contracting = "Contracting",
    Title = "Title"
}
/**
 * order of sort (if absent default is asc)
 */
export declare enum GetSpacesSpaceIdFoldersIdInvoicesSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetSpacesSpaceIdFoldersIdInvoicesRequest extends SpeakeasyBase {
    /**
     * value of AccountedOn (boolean available but not range)
     */
    accountedOn?: string;
    /**
     * amount before VAT
     */
    beforeVAT?: number;
    /**
     * date range of the documents
     */
    date?: string;
    /**
     * date due payment
     */
    dueDate?: string;
    /**
     * json object to filter extend data
     */
    extend?: string;
    /**
     * date range of attachment
     */
    folderDate?: string;
    /**
     * amount incl. VAT
     */
    inclVAT?: number;
    /**
     * range date of invoice
     */
    invoiceDate?: string;
    /**
     * Number of the invoice
     */
    number?: string;
    /**
     * date of payment (boolean and valid available)
     */
    paymentDate?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * name of value for sort
     */
    sortName?: GetSpacesSpaceIdFoldersIdInvoicesSortNameEnum;
    /**
     * order of sort (if absent default is asc)
     */
    sortOrder?: GetSpacesSpaceIdFoldersIdInvoicesSortOrderEnum;
    /**
     * Title of the documents
     */
    title?: string;
    /**
     * If present returns also the data extend
     */
    withExtend?: string;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdInvoicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of invoices of the folder  (if the folder is the root folder (Customers of Providers) the FolderId, the Designation and the Contracting  of the contract are also returned)
     */
    getSpacesSpaceIdFoldersIdInvoices200ApplicationJSONAllOfs?: shared.Invoice[];
}
