import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Room Polices
 */
export declare class RoomPolicies extends SpeakeasyBase {
    /**
     * Default policy room expiration period in seconds.
     *
     * @remarks
     *
     * All files in a room will have their expiration date set to this period after their respective upload.
     *
     * 0 means no default expiration policy is set.
     */
    defaultExpirationPeriod: number;
}
