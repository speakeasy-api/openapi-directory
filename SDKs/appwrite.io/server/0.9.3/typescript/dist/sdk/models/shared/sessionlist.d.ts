import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
/**
 * Sessions List
 */
export declare class SessionList extends SpeakeasyBase {
    /**
     * List of sessions.
     */
    sessions: Session[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
