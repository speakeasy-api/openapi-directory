import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
/**
 * An object to represent a user's like.
 */
export declare class Like extends SpeakeasyBase {
    /**
     * Globally unique identifier of the object, as a string.
     */
    gid?: string;
    user?: UserCompact;
}
