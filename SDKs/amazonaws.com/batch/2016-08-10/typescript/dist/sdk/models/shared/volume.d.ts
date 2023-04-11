import { SpeakeasyBase } from "../../../internal/utils";
import { EFSVolumeConfiguration } from "./efsvolumeconfiguration";
import { Host } from "./host";
/**
 * A data volume that's used in a job's container properties.
 */
export declare class Volume extends SpeakeasyBase {
    efsVolumeConfiguration?: EFSVolumeConfiguration;
    host?: Host;
    name?: string;
}
