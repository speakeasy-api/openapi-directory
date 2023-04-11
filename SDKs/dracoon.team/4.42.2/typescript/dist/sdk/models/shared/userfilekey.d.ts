import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
/**
 * User file key
 */
export declare class UserFileKey extends SpeakeasyBase {
    /**
     * File key information
     */
    fileKey: FileKey;
    /**
     * Unique identifier for the user
     */
    userId: number;
}
