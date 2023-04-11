import { SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";
/**
 * A response message that contains the status of an updated index field.
 */
export declare class DefineIndexFieldResponse extends SpeakeasyBase {
    /**
     * The value of an <code>IndexField</code> and its current status.
     */
    indexField: IndexFieldStatus;
}
