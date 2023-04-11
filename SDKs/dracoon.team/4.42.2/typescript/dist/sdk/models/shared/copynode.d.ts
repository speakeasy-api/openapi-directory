import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Copied node information
 */
export declare class CopyNode extends SpeakeasyBase {
    /**
     * Source node ID
     */
    id: number;
    /**
     * New node name
     */
    name?: string;
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
