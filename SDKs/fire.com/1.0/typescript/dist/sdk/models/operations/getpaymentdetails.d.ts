import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPaymentDetailsRequest extends SpeakeasyBase {
    paymentUuid: string;
}
/**
 * The three letter code for the currency - either `EUR` or `GBP`.
 */
export declare enum GetPaymentDetailsPaymentRequestCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
/**
 * The currency.
 */
export declare class GetPaymentDetailsPaymentRequestCurrency extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    code?: GetPaymentDetailsPaymentRequestCurrencyCodeEnum;
    /**
     * The name of the currency
     */
    description?: string;
}
export declare class GetPaymentDetailsPaymentRequestOrderDetails extends SpeakeasyBase {
    /**
     * This is your own comment for the transaction.
     */
    comment1?: string;
    /**
     * This is your own comment for the transaction.
     */
    comment2?: string;
    /**
     * Use this field to store a customer number for the transaction (for example).
     */
    customerNumber?: string;
    /**
     * The first line of the delivery address.
     */
    deliveryAddressLine1?: string;
    /**
     * The second line of the delivery address.
     */
    deliveryAddressLine2?: string;
    /**
     * Delivery address city
     */
    deliveryCity?: string;
    /**
     * 2-digit code for the country
     */
    deliveryCountry?: string;
    /**
     * Delivery address post code
     */
    deliveryPostCode?: string;
    /**
     * This is a reference you use to uniquely identify each of your customers.
     */
    merchantCustomerIdentification?: string;
    /**
     * Your Merchant Number (if applicable).
     */
    merchantNumber?: string;
    /**
     * Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1.
     */
    orderId?: string;
    /**
     * Use this field to store a product id for the transaction (for example).
     */
    productId?: string;
    /**
     * Use this field to store any other reference for the transaction (for example, a phone number).
     */
    variableReference?: string;
}
/**
 * The status of the transaction
 */
export declare enum GetPaymentDetailsPaymentRequestStatusEnum {
    AwaitingAuthorisation = "AWAITING_AUTHORISATION",
    Authorised = "AUTHORISED",
    AwaitingMultiAuthorisation = "AWAITING_MULTI_AUTHORISATION",
    NotAuthorised = "NOT_AUTHORISED",
    Paid = "PAID",
    Rejected = "REJECTED",
    Accepted = "ACCEPTED",
    Received = "RECEIVED"
}
/**
 * The type of payment request payment
 */
export declare enum GetPaymentDetailsPaymentRequestTransactionTypeEnum {
    RefundRequest = "REFUND_REQUEST",
    Payment = "PAYMENT"
}
/**
 * The type of Fire Open Payment that was created
 */
export declare enum GetPaymentDetailsPaymentRequestTypeEnum {
    Other = "OTHER"
}
/**
 * The Payment Request details object
 */
export declare class GetPaymentDetailsPaymentRequest extends SpeakeasyBase {
    /**
     * These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer.
     */
    additionalFields?: string;
    /**
     * The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100).
     */
    amount?: number;
    /**
     * For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.
     */
    collectFields?: string;
    /**
     * The currency.
     */
    currency?: GetPaymentDetailsPaymentRequestCurrency;
    /**
     * A public facing description of the request. This will be shown to the user when they tap or scan the request.
     */
    description?: string;
    /**
     * This is the expiry of the payment request. After this time, the payment cannot be paid.
     */
    expiry?: Date;
    /**
     * The ican of the account to collect the funds into. Must be one of your fire.com Accounts.
     */
    icanTo?: number;
    /**
     * For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.
     */
    mandatoryFields?: string;
    /**
     * The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types.
     */
    maxNumberPayments?: number;
    /**
     * An internal description of the request.
     */
    myRef?: string;
    orderDetails?: GetPaymentDetailsPaymentRequestOrderDetails;
    /**
     * The code that was returned when you created the payment request.
     */
    paymentRequestCode?: string;
    /**
     * A unique id for the transaction.
     */
    paymentUuid?: string;
    /**
     * The merchant return URL where the customer will be re-directed to with the result of the transaction.
     */
    returnUrl?: string;
    /**
     * The status of the transaction
     */
    status?: GetPaymentDetailsPaymentRequestStatusEnum;
    /**
     * The type of payment request payment
     */
    transactionType?: GetPaymentDetailsPaymentRequestTransactionTypeEnum;
    /**
     * The type of Fire Open Payment that was created
     */
    type?: GetPaymentDetailsPaymentRequestTypeEnum;
    /**
     * A URL to be called in the background with the details of the payment after the payment is complete
     */
    webhookUrl?: string;
}
export declare class GetPaymentDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The Payment Request details object
     */
    paymentRequest?: GetPaymentDetailsPaymentRequest;
}
