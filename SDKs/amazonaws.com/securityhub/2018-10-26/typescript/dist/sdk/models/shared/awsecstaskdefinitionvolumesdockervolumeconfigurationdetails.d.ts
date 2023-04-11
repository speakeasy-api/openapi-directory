import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a Docker volume.
 */
export declare class AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails extends SpeakeasyBase {
    autoprovision?: boolean;
    driver?: string;
    driverOpts?: Record<string, string>;
    labels?: Record<string, string>;
    scope?: string;
}
