import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A type that contains the fields for the <b>UpdateKeywordByKeywordId</b> request.
 */
export declare class UpdateKeywordByKeywordIdRequest extends SpeakeasyBase {
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    bid?: Amount;
    /**
     * This field is used to identify the keyword to be updated. The <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method can be used to retrieve keywordId values.
     */
    keywordId?: string;
    /**
     * Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>
     */
    keywordStatus?: string;
}
