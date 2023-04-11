import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Customer settings
 */
export declare class CustomerSettingsResponse extends SpeakeasyBase {
    /**
     * Homeroom Parent ID
     */
    homeRoomParentId?: number;
    /**
     * Homeroom Parent Name
     */
    homeRoomParentName?: string;
    /**
     * Homeroom Quota in bytes
     */
    homeRoomQuota?: number;
    /**
     * Homerooms active
     */
    homeRoomsActive: boolean;
}
