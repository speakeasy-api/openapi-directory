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
export declare enum CreateFolderRequestClassificationEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Request model for creating a folder
 */
export declare class CreateFolderRequest extends SpeakeasyBase {
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
    classification?: CreateFolderRequestClassificationEnum;
    /**
     * Name
     */
    name: string;
    /**
     * User notes
     *
     * @remarks
     *
     * Use empty string to remove.
     */
    notes?: string;
    /**
     * Parent node ID (room or folder)
     */
    parentId: number;
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
