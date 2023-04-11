import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for a volume mount point that's used in a container definition.
 */
export declare class MountPoint extends SpeakeasyBase {
    containerPath?: string;
    readOnly?: boolean;
    sourceVolume?: string;
}
