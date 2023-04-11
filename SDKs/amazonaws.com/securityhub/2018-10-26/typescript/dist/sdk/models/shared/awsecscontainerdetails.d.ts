import { SpeakeasyBase } from "../../../internal/utils";
import { AwsMountPoint } from "./awsmountpoint";
/**
 * Provides information about an Amazon ECS container.
 */
export declare class AwsEcsContainerDetails extends SpeakeasyBase {
    image?: string;
    mountPoints?: AwsMountPoint[];
    name?: string;
    privileged?: boolean;
}
