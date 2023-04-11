import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentication method
 */
export declare class AuthMethod extends SpeakeasyBase {
    /**
     * Is enabled
     */
    isEnabled: boolean;
    /**
     * Authentication methods:
     *
     * @remarks
     *
     * * `basic`
     *
     * * `active_directory`
     *
     * * `radius`
     *
     * * `openid`
     */
    name: string;
    /**
     * Priority (smaller values have higher priority)
     */
    priority: number;
}
