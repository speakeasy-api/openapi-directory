import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeMount } from "./volumemount";
/**
 * Container details related to a finding.
 */
export declare class ContainerDetails extends SpeakeasyBase {
    containerRuntime?: string;
    imageId?: string;
    imageName?: string;
    launchedAt?: string;
    name?: string;
    privileged?: boolean;
    volumeMounts?: VolumeMount[];
}
