import { SpeakeasyBase } from "../../../internal/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";
/**
 * Request model for handling encryption settings for a room
 */
export declare class EncryptRoomRequest extends SpeakeasyBase {
    /**
     * Key pair container
     */
    dataRoomRescueKey?: UserKeyPairContainer;
    /**
     * Encryption state
     */
    isEncrypted: boolean;
    /**
     * Use system emergency password (rescue key) for files in this room
     */
    useDataSpaceRescueKey?: boolean;
}
