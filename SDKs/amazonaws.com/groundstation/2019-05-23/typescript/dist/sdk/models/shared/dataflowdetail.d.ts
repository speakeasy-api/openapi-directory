import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Source } from "./source";
/**
 * Information about a dataflow edge used in a contact.
 */
export declare class DataflowDetail extends SpeakeasyBase {
    /**
     * Dataflow details for the destination side.
     */
    destination?: Destination;
    errorMessage?: string;
    /**
     * Dataflow details for the source side.
     */
    source?: Source;
}
