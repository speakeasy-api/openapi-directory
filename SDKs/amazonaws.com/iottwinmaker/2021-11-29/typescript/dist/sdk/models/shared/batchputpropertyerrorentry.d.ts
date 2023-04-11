import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPutPropertyError } from "./batchputpropertyerror";
/**
 * An object that contains information about errors returned by the <code>BatchPutProperty</code> action.
 */
export declare class BatchPutPropertyErrorEntry extends SpeakeasyBase {
    errors: BatchPutPropertyError[];
}
