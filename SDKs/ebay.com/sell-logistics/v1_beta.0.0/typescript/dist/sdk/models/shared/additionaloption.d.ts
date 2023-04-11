import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.
 */
export declare class AdditionalOption extends SpeakeasyBase {
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    additionalCost?: Amount;
    /**
     * The name of a shipping option that can be purchased in addition to the base shipping cost of this rate. The value supplied in this field must match exactly the option name as supplied by the selected rate.
     */
    optionType?: string;
}
