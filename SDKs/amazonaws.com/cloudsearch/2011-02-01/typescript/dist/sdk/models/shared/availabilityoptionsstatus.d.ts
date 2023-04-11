import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The status and configuration of the domain's availability options.
 */
export declare class AvailabilityOptionsStatus extends SpeakeasyBase {
    options: boolean;
    /**
     * The status of an option, including when it was last updated and whether it is actively in use for searches.
     */
    status: OptionStatus;
}
