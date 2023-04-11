import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalInfoData } from "./additionalinfodata";
/**
 * A type that provides additional information for suggested keywords.
 */
export declare class AdditionalInfo extends SpeakeasyBase {
    /**
     * The type of additional information provided for the suggested keyword.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdditionalInfoEnum'>eBay API documentation</a>
     */
    infoType?: string;
    /**
     * A list of additional data provided for the suggested keyword.
     */
    metrics?: AdditionalInfoData[];
}
