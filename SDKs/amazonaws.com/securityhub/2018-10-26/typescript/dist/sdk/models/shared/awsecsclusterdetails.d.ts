import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsClusterClusterSettingsDetails } from "./awsecsclusterclustersettingsdetails";
import { AwsEcsClusterConfigurationDetails } from "./awsecsclusterconfigurationdetails";
import { AwsEcsClusterDefaultCapacityProviderStrategyDetails } from "./awsecsclusterdefaultcapacityproviderstrategydetails";
/**
 * Provides details about an Amazon ECS cluster.
 */
export declare class AwsEcsClusterDetails extends SpeakeasyBase {
    activeServicesCount?: number;
    capacityProviders?: string[];
    clusterArn?: string;
    clusterName?: string;
    clusterSettings?: AwsEcsClusterClusterSettingsDetails[];
    configuration?: AwsEcsClusterConfigurationDetails;
    defaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
    registeredContainerInstancesCount?: number;
    runningTasksCount?: number;
    status?: string;
}
