import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetViewError } from "./batchgetviewerror";
import { View } from "./view";
/**
 * Success
 */
export declare class BatchGetViewOutput extends SpeakeasyBase {
    errors?: BatchGetViewError[];
    views?: View[];
}
