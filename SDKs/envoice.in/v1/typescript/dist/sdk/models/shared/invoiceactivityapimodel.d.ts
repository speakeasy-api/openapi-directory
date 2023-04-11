import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the activity
 */
export declare enum InvoiceActivityApiModelTypeEnum {
    Created = "Created",
    Draft = "Draft",
    Cloned = "Cloned",
    SentViaEmail = "SentViaEmail",
    SentViaSms = "SentViaSms",
    SentReminderViaEmail = "SentReminderViaEmail",
    SentReminderViaSms = "SentReminderViaSms",
    Opened = "Opened",
    Viewed = "Viewed",
    Rejected = "Rejected",
    Updated = "Updated",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    NewManualPayment = "NewManualPayment",
    NewPaymentWithPaypal = "NewPaymentWithPaypal",
    NewPaymentWithStripe = "NewPaymentWithStripe",
    NewPaymentWithPayoneer = "NewPaymentWithPayoneer",
    SentToAccountant = "SentToAccountant",
    DownloadedAsPdf = "DownloadedAsPdf",
    MarkAsPaidByTheClient = "MarkAsPaidByTheClient",
    OpenedAttachment = "OpenedAttachment",
    NewPaymentWithSquare = "NewPaymentWithSquare",
    NewPaymentWithKlikAndPay = "NewPaymentWithKlikAndPay",
    NewPaymentWithRazorpay = "NewPaymentWithRazorpay",
    NewPaymentWithWepay = "NewPaymentWithWepay",
    NewPaymentWithHalkbank = "NewPaymentWithHalkbank",
    ChangeStatus = "ChangeStatus",
    OrderUpdated = "OrderUpdated",
    OrderCreated = "OrderCreated",
    NewPaymentWithTwoCheckout = "NewPaymentWithTwoCheckout",
    NewPaymentWithPaymentWall = "NewPaymentWithPaymentWall",
    NewPaymentWithBamboraEU = "NewPaymentWithBamboraEU",
    NewPaymentWithBamboraNA = "NewPaymentWithBamboraNA",
    Void = "Void",
    NewPaymentWithNlb = "NewPaymentWithNlb",
    NewPaymentWithAuthorizeNet = "NewPaymentWithAuthorizeNet",
    NewPaymentWithBraintree = "NewPaymentWithBraintree",
    EstimationCreated = "EstimationCreated",
    EstimationDraft = "EstimationDraft",
    EstimationCloned = "EstimationCloned",
    EstimationSentViaEmail = "EstimationSentViaEmail",
    EstimationOpened = "EstimationOpened",
    EstimationViewed = "EstimationViewed",
    EstimationAccepted = "EstimationAccepted",
    EstimationRejected = "EstimationRejected",
    EstimationUpdated = "EstimationUpdated",
    EstimationDownloadedAsPdf = "EstimationDownloadedAsPdf",
    InvoiceDigitallySigned = "InvoiceDigitallySigned"
}
export declare class InvoiceActivityApiModel extends SpeakeasyBase {
    /**
     * Id of invoice activity
     */
    id?: number;
    /**
     * Indicates to which invoice this activity refers to
     */
    invoiceNumber?: string;
    /**
     * Url which point out to a certain activity action. Ex: Click to view the payment
     */
    link?: string;
    /**
     * Message associated with the activity
     */
    message?: string;
    /**
     * Type of the activity
     */
    type?: InvoiceActivityApiModelTypeEnum;
}
