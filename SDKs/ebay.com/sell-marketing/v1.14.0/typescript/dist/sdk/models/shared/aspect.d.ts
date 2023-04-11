import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that contains the aspect fields.
 */
export declare class Aspect extends SpeakeasyBase {
    /**
     * The type of the aspect. For example, <code>MINIMUM_REQUIRED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AspectKeyEnum'>eBay API documentation</a>
     */
    key?: string;
    /**
     * The value of the aspect. For example, if the aspect is a percentage, a value of '2.0' would equal 2%.
     */
    value?: string;
}
