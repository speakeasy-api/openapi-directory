import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The value of the <code>DefaultSearchField</code> configured for this search domain and its current status.
 */
export declare class DefaultSearchFieldStatus extends SpeakeasyBase {
    options: string;
    /**
     * The status of an option, including when it was last updated and whether it is actively in use for searches.
     */
    status: OptionStatus;
}
