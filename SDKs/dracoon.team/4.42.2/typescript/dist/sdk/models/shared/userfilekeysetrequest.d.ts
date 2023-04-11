import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
/**
 * Request model for setting a user file key
 */
export declare class UserFileKeySetRequest extends SpeakeasyBase {
    /**
     * File ID
     */
    fileId: number;
    /**
     * File key information
     */
    fileKey: FileKey;
    /**
     * Unique identifier for the user
     */
    userId: number;
}
