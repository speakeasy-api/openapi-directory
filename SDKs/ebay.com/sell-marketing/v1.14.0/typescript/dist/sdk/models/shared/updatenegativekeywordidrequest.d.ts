import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that defines the fields used to update a negative keyword.
 */
export declare class UpdateNegativeKeywordIdRequest extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.
     */
    negativeKeywordId?: string;
    /**
     * A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>
     */
    negativeKeywordStatus?: string;
}
