import { SpeakeasyBase } from "../../../internal/utils";
import { StemmingOptionsStatus } from "./stemmingoptionsstatus";
/**
 * A response message that contains the status of updated stemming options.
 */
export declare class UpdateStemmingOptionsResponse extends SpeakeasyBase {
    /**
     * The stemming options configured for this search domain and the current status of those options.
     */
    stems: StemmingOptionsStatus;
}
