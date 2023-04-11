import { SpeakeasyBase } from "../../../internal/utils";
import { UserFileKey } from "./userfilekey";
/**
 * Mandatory for encrypted shares
 */
export declare class UserFileKeyList extends SpeakeasyBase {
    /**
     * List of user file keys
     */
    items?: UserFileKey[];
}
