import { SpeakeasyBase } from "../../../internal/utils";
import { StopwordOptionsStatus } from "./stopwordoptionsstatus";
/**
 * A response message that contains the status of updated stopword options.
 */
export declare class UpdateStopwordOptionsResponse extends SpeakeasyBase {
    /**
     * The stopword options configured for this search domain and the current status of those options.
     */
    stopwords: StopwordOptionsStatus;
}
