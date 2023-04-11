import { SpeakeasyBase } from "../../../internal/utils";
import { FileFileKeys } from "./filefilekeys";
import { Range } from "./range";
import { UserIdFileIdItem } from "./useridfileiditem";
import { UserUserPublicKey } from "./useruserpublickey";
/**
 * Missing keys information
 */
export declare class MissingKeysResponse extends SpeakeasyBase {
    /**
     * List of file keys
     */
    files?: FileFileKeys[];
    /**
     * List of user ID and file ID mappings
     */
    items?: UserIdFileIdItem[];
    /**
     * Range information
     */
    range?: Range;
    /**
     * List of user public keys
     */
    users?: UserUserPublicKey[];
}
