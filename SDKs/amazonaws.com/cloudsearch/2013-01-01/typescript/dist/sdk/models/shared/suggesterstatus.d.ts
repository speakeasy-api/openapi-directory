import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
import { Suggester } from "./suggester";
/**
 * The value of a <code>Suggester</code> and its current status.
 */
export declare class SuggesterStatus extends SpeakeasyBase {
    /**
     * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.
     */
    options: Suggester;
    /**
     * The status of domain configuration option.
     */
    status: OptionStatus;
}
