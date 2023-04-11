import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that contains the dimension fields.
 */
export declare class AlertDimension extends SpeakeasyBase {
    /**
     * The key field of the applied dimension. For example, the marketplace Id. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:DimensionKeyEnum'>eBay API documentation</a>
     */
    key?: string;
    /**
     * The value field of the applied dimension. For example, if the key is a <code>MARKETPLACE_ID</code>, the value would be from <a href='/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>MarketplaceIdEnum</a>.
     */
    value?: string;
}
