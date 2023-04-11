import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
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
 *
 *
 *
 * (default: classification from parent room)
 */
export declare enum CreateFileUploadRequestClassificationEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Request model for creating an upload channel
 */
export declare class CreateFileUploadRequest extends SpeakeasyBase {
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
     *
     *
     *
     * (default: classification from parent room)
     */
    classification?: CreateFileUploadRequestClassificationEnum;
    /**
     * &#128640; Since v4.15.0
     *
     * @remarks
     *
     * Upload direct to S3
     */
    directS3Upload?: boolean;
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * File name
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
     * File size in byte
     */
    size?: number;
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
