import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionT } from "./function";
/**
 * Functions List
 */
export declare class FunctionList extends SpeakeasyBase {
    /**
     * List of functions.
     */
    functions: FunctionT[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
