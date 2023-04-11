import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for setting the customer settings
 */
export declare class CustomerSettingsRequest extends SpeakeasyBase {
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
    homeRoomsActive?: boolean;
}
