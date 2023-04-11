import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that contains the fields for the <b>UpdateAdStatus</b> request.
 */
export declare class UpdateAdStatusRequest extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID that is generated when the ad is created.
     */
    adId?: string;
    /**
     * An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a>
     */
    adStatus?: string;
}
