import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that contains the fields for the <b>UpdateNegativeKeyword</b> request.
 */
export declare class UpdateNegativeKeywordRequest extends SpeakeasyBase {
    /**
     * A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>
     */
    negativeKeywordStatus?: string;
}
