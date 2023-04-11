import { SpeakeasyBase } from "../../../internal/utils";
import { Issue } from "./issue";
/**
 * code    | title
 *
 * @remarks
 * ------- | -------------------------------------
 * 425     | INVALID DATE
 * 477     | INVALID FORMAT
 * 2668    | PARAMETER COMBINATION INVALID/RESTRICTED
 * 4926    | INVALID DATA RECEIVED
 * 10661   | MAXIMUM NUMBER OF OCCURRENCES EXCEEDED
 * 32171   | MANDATORY DATA MISSING
 *
 */
export declare class Error400 extends SpeakeasyBase {
    errors: Issue[];
}
