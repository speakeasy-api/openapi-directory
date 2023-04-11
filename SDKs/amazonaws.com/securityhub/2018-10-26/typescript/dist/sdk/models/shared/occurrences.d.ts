import { SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";
import { Page } from "./page";
import { Range } from "./range";
import { RecordT } from "./record";
/**
 * The detected occurrences of sensitive data.
 */
export declare class Occurrences extends SpeakeasyBase {
    cells?: Cell[];
    lineRanges?: Range[];
    offsetRanges?: Range[];
    pages?: Page[];
    records?: RecordT[];
}
