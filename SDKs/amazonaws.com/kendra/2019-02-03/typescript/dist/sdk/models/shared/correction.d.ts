import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A corrected misspelled word in a query.
 */
export declare class Correction extends SpeakeasyBase {
    beginOffset?: number;
    correctedTerm?: string;
    endOffset?: number;
    term?: string;
}
