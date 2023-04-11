import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";
/**
 * Authentication method
 */
export declare class UserAuthMethod extends SpeakeasyBase {
    /**
     * Authentication method
     *
     * @remarks
     *
     *
     *
     * Authentication methods:
     *
     * * `basic`
     *
     * * `active_directory`
     *
     * * `radius`
     *
     * * `openid`
     */
    authId: string;
    /**
     * Is enabled
     */
    isEnabled: boolean;
    /**
     * Authentication method options
     */
    options?: KeyValueEntry[];
}
