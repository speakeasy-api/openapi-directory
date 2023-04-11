import { SpeakeasyBase } from "../../../internal/utils";
/**
 * &#128640; Since v4.30.0
 *
 * @remarks
 *
 * Classification ID:
 *
 * * `1` - public
 *
 * * `2` - internal
 *
 * * `3` - confidential
 *
 * * `4` - strictly confidential
 *
 *
 *
 * Provided (or default) classification is taken from room
 *
 * when file gets uploaded without any classification.
 */
export declare enum UpdateFolderRequestClassificationEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Request model for updating folder's metadata
 */
export declare class UpdateFolderRequest extends SpeakeasyBase {
    /**
     * &#128640; Since v4.30.0
     *
     * @remarks
     *
     * Classification ID:
     *
     * * `1` - public
     *
     * * `2` - internal
     *
     * * `3` - confidential
     *
     * * `4` - strictly confidential
     *
     *
     *
     * Provided (or default) classification is taken from room
     *
     * when file gets uploaded without any classification.
     */
    classification?: UpdateFolderRequestClassificationEnum;
    /**
     * Folder name
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
