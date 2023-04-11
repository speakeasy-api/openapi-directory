import { SpeakeasyBase } from "../../../internal/utils";
import { SynonymOptionsStatus } from "./synonymoptionsstatus";
/**
 * A response message that contains the status of updated synonym options.
 */
export declare class UpdateSynonymOptionsResponse extends SpeakeasyBase {
    /**
     * The synonym options configured for this search domain and the current status of those options.
     */
    synonyms: SynonymOptionsStatus;
}
