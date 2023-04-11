import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating file's metadata
 */
export declare class UpdateFileRequest extends SpeakeasyBase {
    /**
     * Classification ID:
     *
     * @remarks
     *
     * * `1` - public
     *
     * * `2` - internal
     *
     * * `3` - confidential
     *
     * * `4` - strictly confidential
     */
    classification?: number;
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * File name
     */
    name?: string;
    /**
     * User notes
     *
     * @remarks
     *
     * Use empty string to remove.
     */
    notes?: string;
    /**
     * &#128640; Since v4.22.0
     *
     * @remarks
     *
     * Time the node was created on external file system
     *
     * (default: current server datetime in UTC format)
     */
    timestampCreation?: Date;
    /**
     * &#128640; Since v4.22.0
     *
     * @remarks
     *
     * Time the content of a node was last modified on external file system
     *
     * (default: current server datetime in UTC format)
     */
    timestampModification?: Date;
}
