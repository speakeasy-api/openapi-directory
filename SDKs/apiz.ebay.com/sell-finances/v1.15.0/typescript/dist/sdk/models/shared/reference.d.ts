import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees.
 */
export declare class Reference extends SpeakeasyBase {
    /**
     * The identifier of the transaction as specified by the <strong>referenceType</strong>. For example, with a <strong>referenceType</strong> of <strong>item_id</strong>, the <strong>referenceId</strong> refers to a unique item. This item may have several <code>NON_SALE_CHARGE</code> transactions.
     */
    referenceId?: string;
    /**
     * An enumeration value that identifies the reference type associated with the <strong>referenceId</strong>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:ReferenceTypeEnum'>eBay API documentation</a>
     */
    referenceType?: string;
}
