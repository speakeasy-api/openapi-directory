import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsContainerDetails } from "./awsecscontainerdetails";
import { AwsEcsTaskVolumeDetails } from "./awsecstaskvolumedetails";
/**
 * Provides details about a task in a cluster.
 */
export declare class AwsEcsTaskDetails extends SpeakeasyBase {
    clusterArn?: string;
    containers?: AwsEcsContainerDetails[];
    createdAt?: string;
    group?: string;
    startedAt?: string;
    startedBy?: string;
    taskDefinitionArn?: string;
    version?: string;
    volumes?: AwsEcsTaskVolumeDetails[];
}
