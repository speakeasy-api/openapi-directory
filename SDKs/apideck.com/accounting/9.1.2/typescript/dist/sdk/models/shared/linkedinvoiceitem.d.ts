import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinkedInvoiceItemInput extends SpeakeasyBase {
    /**
     * ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item
     */
    id?: string;
}
export declare class LinkedInvoiceItem extends SpeakeasyBase {
    /**
     * User defined item code
     */
    code?: string;
    /**
     * ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item
     */
    id?: string;
    /**
     * User defined item name
     */
    name?: string;
}
