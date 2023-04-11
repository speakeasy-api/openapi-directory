import { SpeakeasyBase } from "../../../internal/utils";
import { Terminal } from "./terminal";
/**
 * OK - the request has succeeded.
 */
export declare class ListTerminalsResponse extends SpeakeasyBase {
    /**
     * The list of terminals.
     */
    data?: Terminal[];
}
