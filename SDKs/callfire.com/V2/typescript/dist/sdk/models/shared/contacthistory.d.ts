import { SpeakeasyBase } from "../../../internal/utils";
import { Call } from "./call";
import { Text } from "./text";
/**
 * Contains history of all calls and texts addressed to a given contact
 */
export declare class ContactHistory extends SpeakeasyBase {
    /**
     * List of Call objects addressed to a given contact
     */
    calls?: Call[];
    /**
     * An id of a contact
     */
    id?: number;
    /**
     * List of Text objects addressed to a given contact
     */
    texts?: Text[];
}
