import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created. Your volume was successfully created in your space.
 */
export declare class Volume extends SpeakeasyBase {
    /**
     *  Unique identifier representing the file share on which the volume is hosted.
     */
    fsID?: string;
    /**
     * Full path to the mounted volume inside the container.
     */
    hostPath?: string;
    /**
     * List of space IDs in which the volume is visible and can be used by all the single containers and container groups.
     */
    otherSpaceVisibility?: string[];
    /**
     * Unique identifier representing the space where the volume got created.
     */
    spaceGuid?: string;
    /**
     * The name of the volume.
     */
    volName?: string;
}
