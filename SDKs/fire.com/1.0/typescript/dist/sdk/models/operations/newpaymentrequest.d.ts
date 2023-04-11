import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.
 */
export declare enum NewPaymentRequestNewPaymentRequestCurrencyEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
export declare class NewPaymentRequestNewPaymentRequestOrderDetails extends SpeakeasyBase {
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
 * The type of Fire Open Payment that was created
 */
export declare enum NewPaymentRequestNewPaymentRequestTypeEnum {
    Other = "OTHER"
}
/**
 * Details of the new payment request
 */
export declare class NewPaymentRequestNewPaymentRequest extends SpeakeasyBase {
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
     * Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.
     */
    currency: NewPaymentRequestNewPaymentRequestCurrencyEnum;
    /**
     * A public facing description of the request. This will be shown to the user when they tap or scan the request.
     */
    description: string;
    /**
     * This is the expiry of the payment request. After this time, the payment cannot be paid.
     */
    expiry?: Date;
    /**
     * The ican of the account to collect the funds into. Must be one of your fire.com Accounts.
     */
    icanTo: number;
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
    myRef: string;
    orderDetails?: NewPaymentRequestNewPaymentRequestOrderDetails;
    /**
     * The merchant return URL where the customer will be re-directed to with the result of the transaction.
     */
    returnUrl?: string;
    /**
     * The type of Fire Open Payment that was created
     */
    type: NewPaymentRequestNewPaymentRequestTypeEnum;
}
/**
 * The type of Fire Open Payment that was created.
 */
export declare enum NewPaymentRequestNewPaymentRequestResponseTypeEnum {
    Other = "OTHER"
}
/**
 * Payment Request created successfully
 */
export declare class NewPaymentRequestNewPaymentRequestResponse extends SpeakeasyBase {
    /**
     * The code for this request. Create a URL in this format: `https://payments.fire.com/{code}` and share to your customers.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The type of Fire Open Payment that was created.
     */
    type?: NewPaymentRequestNewPaymentRequestResponseTypeEnum;
}
export declare class NewPaymentRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Payment Request created successfully
     */
    newPaymentRequestResponse?: NewPaymentRequestNewPaymentRequestResponse;
}
