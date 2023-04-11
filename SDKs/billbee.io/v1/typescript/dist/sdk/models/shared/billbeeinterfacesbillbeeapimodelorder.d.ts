import { SpeakeasyBase } from "../../../internal/utils";
import { BillbeeInterfacesBillbeeAPIModelCommentAPIModel } from "./billbeeinterfacesbillbeeapimodelcommentapimodel";
import { BillbeeInterfacesBillbeeAPIModelCustomerAPIModel, BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput } from "./billbeeinterfacesbillbeeapimodelcustomerapimodel";
import { BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel } from "./billbeeinterfacesbillbeeapimodelorderaddressapimodel";
import { BillbeeInterfacesBillbeeAPIModelOrderItem, BillbeeInterfacesBillbeeAPIModelOrderItemInput } from "./billbeeinterfacesbillbeeapimodelorderitem";
import { BillbeeInterfacesBillbeeAPIModelOrderUser, BillbeeInterfacesBillbeeAPIModelOrderUserInput } from "./billbeeinterfacesbillbeeapimodelorderuser";
import { BillbeeInterfacesBillbeeAPIModelShipment } from "./billbeeinterfacesbillbeeapimodelshipment";
import { BillbeeInterfacesBillbeeAPIModelsOrderPayment } from "./billbeeinterfacesbillbeeapimodelsorderpayment";
import { BillbeeInterfacesOrderHistoryEntry } from "./billbeeinterfacesorderhistoryentry";
import { BillbeeInterfacesShippingProductService } from "./billbeeinterfacesshippingproductservice";
/**
 * The payment method
 */
export declare enum BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Six = "6",
    Nineteen = "19",
    Twenty = "20",
    TwentyOne = "21",
    TwentyTwo = "22",
    TwentyThree = "23",
    TwentyFour = "24",
    TwentyFive = "25",
    TwentySix = "26",
    TwentySeven = "27",
    TwentyEight = "28",
    TwentyNine = "29",
    Thirty = "30",
    ThirtyOne = "31",
    ThirtyTwo = "32",
    ThirtyThree = "33",
    ThirtyFour = "34",
    ThirtyFive = "35",
    ThirtySix = "36",
    ThirtySeven = "37",
    ThirtyEight = "38",
    ThirtyNine = "39",
    Forty = "40",
    FortyOne = "41",
    FortyTwo = "42",
    FortyThree = "43",
    FortyFour = "44",
    FortyFive = "45",
    FortySix = "46",
    FortySeven = "47",
    FortyEight = "48",
    FortyNine = "49",
    Fifty = "50",
    FiftyOne = "51",
    FiftyTwo = "52",
    FiftyThree = "53",
    FiftyFour = "54",
    FiftyFive = "55",
    FiftySix = "56",
    FiftySeven = "57",
    FiftyEight = "58",
    FiftyNine = "59",
    Sixty = "60",
    SixtyOne = "61",
    SixtyTwo = "62",
    SixtyThree = "63",
    SixtyFour = "64",
    SixtyFive = "65",
    SixtySix = "66",
    SixtySeven = "67",
    SixtyEight = "68",
    SixtyNine = "69",
    Seventy = "70",
    SeventyOne = "71",
    SeventyTwo = "72",
    SeventyThree = "73",
    SeventyFour = "74",
    SeventyFive = "75",
    SeventySix = "76",
    SeventySeven = "77",
    SeventyEight = "78",
    SeventyNine = "79",
    Eighty = "80",
    EightyOne = "81",
    EightyTwo = "82",
    EightyThree = "83",
    EightyFour = "84",
    EightyFive = "85",
    EightySix = "86",
    EightySeven = "87",
    EightyEight = "88",
    EightyNine = "89",
    Ninety = "90",
    NinetyOne = "91",
    NinetyTwo = "92",
    NinetyThree = "93",
    NinetyFour = "94",
    NinetyFive = "95",
    NinetySix = "96",
    NinetySeven = "97",
    NinetyEight = "98",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101",
    OneHundredAndTwo = "102",
    OneHundredAndThree = "103",
    OneHundredAndFour = "104",
    OneHundredAndFive = "105",
    OneHundredAndSix = "106",
    OneHundredAndSeven = "107",
    OneHundredAndEight = "108",
    OneHundredAndNine = "109",
    OneHundredAndTen = "110",
    OneHundredAndEleven = "111",
    OneHundredAndTwelve = "112",
    OneHundredAndThirteen = "113",
    OneHundredAndFourteen = "114",
    OneHundredAndFifteen = "115",
    OneHundredAndSixteen = "116",
    OneHundredAndSeventeen = "117",
    OneHundredAndEighteen = "118",
    OneHundredAndNineteen = "119",
    OneHundredAndTwenty = "120",
    OneHundredAndTwentyOne = "121",
    OneHundredAndTwentyTwo = "122",
    OneHundredAndTwentyThree = "123",
    OneHundredAndTwentyFour = "124",
    OneHundredAndTwentyFive = "125",
    OneHundredAndTwentySix = "126",
    OneHundredAndTwentySeven = "127",
    OneHundredAndTwentyEight = "128",
    OneHundredAndTwentyNine = "129",
    OneHundredAndThirty = "130",
    OneHundredAndThirtyOne = "131",
    OneHundredAndThirtyTwo = "132",
    OneHundredAndThirtyThree = "133",
    OneHundredAndThirtyFour = "134",
    OneHundredAndThirtyFive = "135",
    OneHundredAndThirtySix = "136"
}
/**
 * The current state of the order
 */
export declare enum BillbeeInterfacesBillbeeAPIModelOrderStateEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    Fifteen = "15",
    Sixteen = "16"
}
/**
 * The vat mode of the order
 */
export declare enum BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5"
}
/**
 * A class that represents the Billbee data model of a single order
 */
export declare class BillbeeInterfacesBillbeeAPIModelOrderInput extends SpeakeasyBase {
    /**
     * Customer accepts loss due to withdrawal
     */
    acceptLossOfReturnRight?: boolean;
    adjustmentCost?: number;
    adjustmentReason?: string;
    /**
     * Id of the account, this order belongs to
     */
    apiAccountId?: number;
    /**
     * The name of the account, this order belongs to. Will be ignored on order creation.
     */
    apiAccountName?: string;
    /**
     * If set, the order was already archived at the given date. Further modification is disabled.
     */
    archivedAt?: Date;
    /**
     * The Order.Id from the Billbee database
     */
    billBeeOrderId?: number;
    /**
     * The Id of the parent order in the Billbee database
     */
    billBeeParentOrderId?: number;
    buyer?: BillbeeInterfacesBillbeeAPIModelOrderUserInput;
    /**
     * All messages / comments of the order
     */
    comments?: BillbeeInterfacesBillbeeAPIModelCommentAPIModel[];
    /**
     * The date on which the order was confirmed
     */
    confirmedAt?: Date;
    /**
     * The date on which the order was created
     */
    createdAt?: Date;
    /**
     * The three letter currency code.
     */
    currency?: string;
    /**
     * An optional multiline text which is printed on the invoice
     */
    customInvoiceNote?: string;
    customer?: BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
    /**
     * The customer number (not to be confused with the id of the customer)
     */
    customerNumber?: string;
    /**
     * The vat-id, that was given by the customer to fulfill this order
     */
    customerVatId?: string;
    /**
     * An optional Country ISO2 Code of the country where order is shipped from (FBA)
     */
    deliverySourceCountryCode?: string;
    /**
     * An optional code for the distribution center delivering this order
     */
    distributionCenter?: string;
    history?: BillbeeInterfacesOrderHistoryEntry[];
    /**
     * Id of the order in the external system (marketplace)
     */
    id?: string;
    invoiceAddress?: BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
    /**
     * The date on which the invoice was created
     */
    invoiceDate?: Date;
    /**
     * The invoice number
     */
    invoiceNumber?: number;
    /**
     * The postfix of the invoice number
     */
    invoiceNumberPostfix?: string;
    /**
     * The prefix of the invoice number
     */
    invoiceNumberPrefix?: string;
    /**
     * An optional Order Id (externalid) for an order if this is a cancel order (shopify only at the moment)
     */
    isCancelationFor?: string;
    /**
     * Indicates whether the order was created through the Billbee-Api or not.
     */
    isFromBillbeeApi?: boolean;
    /**
     * The two-letter language code of the customer
     */
    languageCode?: string;
    /**
     * Date of the last update, the order got
     */
    lastModifiedAt?: Date;
    /**
     * The vat-id, that should be displayed on the invoice and other order documents
     */
    merchantVatId?: string;
    /**
     * The list of items purchased like shirt, pant, toys etc
     */
    orderItems?: BillbeeInterfacesBillbeeAPIModelOrderItemInput[];
    /**
     * Order number of the order in the external system (marketplace)
     */
    orderNumber?: string;
    paidAmount?: number;
    /**
     * The date on which the order was paid
     */
    payedAt?: Date;
    /**
     * A textfield optionaly filled with a payment instruction text for printout on the invoice (z.B. Ebay Kauf auf Rechnung)
     */
    paymentInstruction?: string;
    /**
     * The payment method
     */
    paymentMethod?: BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum;
    /**
     * A payment reference. Should not be used any more. Please use 'Payments' instead.
     */
    paymentReference?: string;
    /**
     * The id of the payment transaction. For example the transaction id of PayPal payment. Should not be used any more. Please use 'Payments' instead.
     */
    paymentTransactionId?: string;
    payments?: BillbeeInterfacesBillbeeAPIModelsOrderPayment[];
    /**
     * If set, the order was restored from the archive at the given date.
     */
    restoredAt?: Date;
    seller?: BillbeeInterfacesBillbeeAPIModelOrderUserInput;
    /**
     * An internal seller comment
     */
    sellerComment?: string;
    /**
     * The total weight of the shipment(s)
     */
    shipWeightKg?: number;
    /**
     * The date on which the order was shipped
     */
    shippedAt?: Date;
    shippingAddress?: BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
    /**
     * The shipping cost
     */
    shippingCost?: number;
    /**
     * The shipments of the order
     */
    shippingIds?: BillbeeInterfacesBillbeeAPIModelShipment[];
    /**
     * Internal Id for the shipping profile for that order
     */
    shippingProfileId?: string;
    /**
     * Display Name of Shipping profile, if available
     */
    shippingProfileName?: string;
    /**
     * Internal Id for the used shipping provider
     */
    shippingProviderId?: number;
    /**
     * The Name for of used shipping provider
     */
    shippingProviderName?: string;
    /**
     * Internal Id for the used shipping product
     */
    shippingProviderProductId?: number;
    /**
     * The Name of the used shipping product
     */
    shippingProviderProductName?: string;
    /**
     * The current state of the order
     */
    state?: BillbeeInterfacesBillbeeAPIModelOrderStateEnum;
    /**
     * The Tags of the order
     */
    tags?: string[];
    /**
     * The regular tax rate
     */
    taxRate1?: number;
    /**
     * The reduced tax rate
     */
    taxRate2?: number;
    /**
     * The total cost excluding shipping cost
     */
    totalCost?: number;
    /**
     * The date on which the order was last updated
     */
    updatedAt?: Date;
    /**
     * The customers vat id
     */
    vatId?: string;
    /**
     * The vat mode of the order
     */
    vatMode?: BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum;
}
/**
 * A class that represents the Billbee data model of a single order
 */
export declare class BillbeeInterfacesBillbeeAPIModelOrder extends SpeakeasyBase {
    /**
     * Customer accepts loss due to withdrawal
     */
    acceptLossOfReturnRight?: boolean;
    adjustmentCost?: number;
    adjustmentReason?: string;
    /**
     * Id of the account, this order belongs to
     */
    apiAccountId?: number;
    /**
     * The name of the account, this order belongs to. Will be ignored on order creation.
     */
    apiAccountName?: string;
    /**
     * If set, the order was already archived at the given date. Further modification is disabled.
     */
    archivedAt?: Date;
    /**
     * The Order.Id from the Billbee database
     */
    billBeeOrderId?: number;
    /**
     * The Id of the parent order in the Billbee database
     */
    billBeeParentOrderId?: number;
    buyer?: BillbeeInterfacesBillbeeAPIModelOrderUser;
    /**
     * All messages / comments of the order
     */
    comments?: BillbeeInterfacesBillbeeAPIModelCommentAPIModel[];
    /**
     * The date on which the order was confirmed
     */
    confirmedAt?: Date;
    /**
     * The date on which the order was created
     */
    createdAt?: Date;
    /**
     * The three letter currency code.
     */
    currency?: string;
    /**
     * An optional multiline text which is printed on the invoice
     */
    customInvoiceNote?: string;
    customer?: BillbeeInterfacesBillbeeAPIModelCustomerAPIModel;
    /**
     * The customer number (not to be confused with the id of the customer)
     */
    customerNumber?: string;
    /**
     * The vat-id, that was given by the customer to fulfill this order
     */
    customerVatId?: string;
    /**
     * An optional Country ISO2 Code of the country where order is shipped from (FBA)
     */
    deliverySourceCountryCode?: string;
    /**
     * An optional code for the distribution center delivering this order
     */
    distributionCenter?: string;
    history?: BillbeeInterfacesOrderHistoryEntry[];
    /**
     * Id of the order in the external system (marketplace)
     */
    id?: string;
    invoiceAddress?: BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
    /**
     * The date on which the invoice was created
     */
    invoiceDate?: Date;
    /**
     * The invoice number
     */
    invoiceNumber?: number;
    /**
     * The postfix of the invoice number
     */
    invoiceNumberPostfix?: string;
    /**
     * The prefix of the invoice number
     */
    invoiceNumberPrefix?: string;
    /**
     * An optional Order Id (externalid) for an order if this is a cancel order (shopify only at the moment)
     */
    isCancelationFor?: string;
    /**
     * Indicates whether the order was created through the Billbee-Api or not.
     */
    isFromBillbeeApi?: boolean;
    /**
     * The two-letter language code of the customer
     */
    languageCode?: string;
    /**
     * Date of the last update, the order got
     */
    lastModifiedAt?: Date;
    /**
     * The vat-id, that should be displayed on the invoice and other order documents
     */
    merchantVatId?: string;
    /**
     * The list of items purchased like shirt, pant, toys etc
     */
    orderItems?: BillbeeInterfacesBillbeeAPIModelOrderItem[];
    /**
     * Order number of the order in the external system (marketplace)
     */
    orderNumber?: string;
    paidAmount?: number;
    /**
     * The date on which the order was paid
     */
    payedAt?: Date;
    /**
     * A textfield optionaly filled with a payment instruction text for printout on the invoice (z.B. Ebay Kauf auf Rechnung)
     */
    paymentInstruction?: string;
    /**
     * The payment method
     */
    paymentMethod?: BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum;
    /**
     * A payment reference. Should not be used any more. Please use 'Payments' instead.
     */
    paymentReference?: string;
    /**
     * The id of the payment transaction. For example the transaction id of PayPal payment. Should not be used any more. Please use 'Payments' instead.
     */
    paymentTransactionId?: string;
    payments?: BillbeeInterfacesBillbeeAPIModelsOrderPayment[];
    rebateDifference?: number;
    /**
     * If set, the order was restored from the archive at the given date.
     */
    restoredAt?: Date;
    seller?: BillbeeInterfacesBillbeeAPIModelOrderUser;
    /**
     * An internal seller comment
     */
    sellerComment?: string;
    /**
     * The total weight of the shipment(s)
     */
    shipWeightKg?: number;
    /**
     * The date on which the order was shipped
     */
    shippedAt?: Date;
    shippingAddress?: BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
    /**
     * The shipping cost
     */
    shippingCost?: number;
    /**
     * The shipments of the order
     */
    shippingIds?: BillbeeInterfacesBillbeeAPIModelShipment[];
    /**
     * Internal Id for the shipping profile for that order
     */
    shippingProfileId?: string;
    /**
     * Display Name of Shipping profile, if available
     */
    shippingProfileName?: string;
    /**
     * Internal Id for the used shipping provider
     */
    shippingProviderId?: number;
    /**
     * The Name for of used shipping provider
     */
    shippingProviderName?: string;
    /**
     * Internal Id for the used shipping product
     */
    shippingProviderProductId?: number;
    /**
     * The Name of the used shipping product
     */
    shippingProviderProductName?: string;
    /**
     * Additional services for the shipment
     */
    shippingServices?: BillbeeInterfacesShippingProductService[];
    /**
     * The current state of the order
     */
    state?: BillbeeInterfacesBillbeeAPIModelOrderStateEnum;
    /**
     * The Tags of the order
     */
    tags?: string[];
    /**
     * The regular tax rate
     */
    taxRate1?: number;
    /**
     * The reduced tax rate
     */
    taxRate2?: number;
    /**
     * The total cost excluding shipping cost
     */
    totalCost?: number;
    /**
     * The date on which the order was last updated
     */
    updatedAt?: Date;
    /**
     * The customers vat id
     */
    vatId?: string;
    /**
     * The vat mode of the order
     */
    vatMode?: BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum;
}
