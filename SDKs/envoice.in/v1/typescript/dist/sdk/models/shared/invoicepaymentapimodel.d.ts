import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of payment
 */
export declare enum InvoicePaymentApiModelTypeEnum {
    Other = "Other",
    Paypal = "Paypal",
    Stripe = "Stripe",
    Payoneer = "Payoneer",
    Bank = "Bank",
    Cash = "Cash",
    Cheque = "Cheque",
    Ach = "Ach",
    Sepa = "Sepa",
    Square = "Square",
    KlikAndPay = "KlikAndPay",
    Razorpay = "Razorpay",
    Wepay = "Wepay",
    Halkbank = "Halkbank",
    TwoCheckout = "TwoCheckout",
    PaymentWall = "PaymentWall",
    BamboraEU = "BamboraEU",
    BamboraNA = "BamboraNA",
    Nlb = "Nlb",
    AuthorizeNet = "AuthorizeNet",
    Braintree = "Braintree"
}
export declare class InvoicePaymentApiModel extends SpeakeasyBase {
    /**
     * Total amount of the payment
     */
    amount?: number;
    /**
     * Id of invoice payment
     */
    id?: number;
    /**
     * Indicate if the payment is automatic or manual
     */
    isAutomatic?: boolean;
    /**
     * Internal payment note
     */
    note?: string;
    /**
     * When the payment was done by the client
     */
    paidOn?: Date;
    /**
     * Id of the payment
     */
    referenceId?: string;
    /**
     * Type of payment
     */
    type?: InvoicePaymentApiModelTypeEnum;
}
