import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendInvoiceToClientApiModel extends SpeakeasyBase {
    /**
     * Should attach pdf file
     */
    attachPdf?: boolean;
    /**
     * Id of the invoice
     */
    id?: number;
    /**
     * Id of the invoice
     */
    invoiceId?: number;
    /**
     * Message to be embedded in the email
     */
    message?: string;
    /**
     * Should email copy be send to self
     */
    sendToSelf?: boolean;
    /**
     * Subject for the email
     */
    subject?: string;
}
