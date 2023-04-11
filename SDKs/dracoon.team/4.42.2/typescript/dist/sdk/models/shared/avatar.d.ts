import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User avatar information
 */
export declare class Avatar extends SpeakeasyBase {
    /**
     * Avatar URI
     */
    avatarUri: string;
    /**
     * Avatar UUID
     */
    avatarUuid: string;
    /**
     * Determines whether user updated his / her avatar with own image
     */
    isCustomAvatar: boolean;
}
