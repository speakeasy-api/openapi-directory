import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdSumInvoicesRequest extends SpeakeasyBase {
    /**
     * amount before VAT
     */
    beforeVAT?: number;
    /**
     * range date due payment
     */
    dueDate?: string;
    /**
     * amount incl. VAT
     */
    inclVat?: number;
    /**
     * range date of invoice
     */
    invoiceDate?: string;
    /**
     * Number of the invoice
     */
    number?: string;
    /**
     * range date of payment
     */
    paymentDate?: string;
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
 * Sum of the invoices of the folder
 */
export declare class GetSpacesSpaceIdFoldersIdSumInvoices200ApplicationJSON extends SpeakeasyBase {
    beforeVAT?: number;
    inclVAT?: number;
    vat?: number;
}
export declare class GetSpacesSpaceIdFoldersIdSumInvoicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Sum of the invoices of the folder
     */
    getSpacesSpaceIdFoldersIdSumInvoices200ApplicationJSONObject?: GetSpacesSpaceIdFoldersIdSumInvoices200ApplicationJSON;
}
