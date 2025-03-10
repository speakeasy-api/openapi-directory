import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for creating a group
 */
export declare class CreateGroupRequest extends SpeakeasyBase {
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * Group name
     */
    name: string;
}
