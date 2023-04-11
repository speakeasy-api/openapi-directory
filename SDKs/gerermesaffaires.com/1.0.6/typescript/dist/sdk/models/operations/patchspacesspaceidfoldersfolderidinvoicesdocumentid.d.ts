import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRequestBodyTypeEnum {
    CommercialInvoice = "commercial-invoice",
    CreditNote = "credit-note",
    AmendingInvoice = "amending-invoice",
    SelfBilling = "self-billing",
    CreditSelfBilling = "credit-self-billing",
    DownPaymentInvoice = "down-payment-invoice",
    InformationsInvoice = "informations-invoice"
}
/**
 * A invoice to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRequestBody extends SpeakeasyBase {
    beforeVAT?: number;
    dueDate?: string;
    inclVAT?: number;
    invoiceDate?: string;
    number?: string;
    paymentDate?: string;
    type?: PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRequestBodyTypeEnum;
    vat?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRequest extends SpeakeasyBase {
    /**
     * A invoice to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRequestBody;
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the folder
     */
    folderId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
