import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that defines the attributes of an Extended Producer Responsibility policy.
 */
export declare class ExtendedProducerResponsibility extends SpeakeasyBase {
    /**
     * An indication of whether the attribute can be enabled for listing variations.<br /><br />If the value is <code>true</code>, the attribute may be specified at the variation level.
     */
    enabledForVariations?: boolean;
    /**
     * The name of the attribute included in the policy. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:ExtendedProducerResponsibilityEnum'>eBay API documentation</a>
     */
    name?: string;
    /**
     * The usage guidelines for the attribute, in the specified marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:GenericUsageEnum'>eBay API documentation</a>
     */
    usage?: string;
}
