import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating room's metadata
 */
export declare class UpdateRoomRequest extends SpeakeasyBase {
    /**
     * Name
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
     * Quota in byte
     */
    quota?: number;
    /**
     * &#128640; Since v4.22.0
     *
     * @remarks
     *
     * Time the node was created on external file system
     */
    timestampCreation?: Date;
    /**
     * &#128640; Since v4.22.0
     *
     * @remarks
     *
     * Time the content of a node was last modified on external file system
     */
    timestampModification?: Date;
}
