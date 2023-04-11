import { SpeakeasyBase } from "../../../internal/utils";
import { Correction } from "./correction";
/**
 * A query with suggested spell corrections.
 */
export declare class SpellCorrectedQuery extends SpeakeasyBase {
    corrections?: Correction[];
    suggestedQueryText?: string;
}
