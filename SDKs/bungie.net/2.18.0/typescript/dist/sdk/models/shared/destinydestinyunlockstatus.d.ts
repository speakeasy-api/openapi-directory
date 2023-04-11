import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the status of an "Unlock Flag" on a Character or Profile.
 *
 * @remarks
 * These are individual bits of state that can be either set or not set, and sometimes provide interesting human-readable information in their related DestinyUnlockDefinition.
 */
export declare class DestinyDestinyUnlockStatus extends SpeakeasyBase {
    /**
     * Whether the unlock flag is set.
     */
    isSet?: boolean;
    /**
     * The hash identifier for the Unlock Flag. Use to lookup DestinyUnlockDefinition for static data. Not all unlocks have human readable data - in fact, most don't. But when they do, it can be very useful to show. Even if they don't have human readable data, you might be able to infer the meaning of an unlock flag with a bit of experimentation...
     */
    unlockHash?: number;
}
