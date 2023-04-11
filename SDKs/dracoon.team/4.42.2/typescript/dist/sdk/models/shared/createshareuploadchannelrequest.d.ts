import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating an upload channel
 */
export declare class CreateShareUploadChannelRequest extends SpeakeasyBase {
    /**
     * &#128640; Since v4.15.0
     *
     * @remarks
     *
     * Upload direct to S3
     */
    directS3Upload?: boolean;
    /**
     * File name
     */
    name: string;
    /**
     * Password
     */
    password?: string;
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
