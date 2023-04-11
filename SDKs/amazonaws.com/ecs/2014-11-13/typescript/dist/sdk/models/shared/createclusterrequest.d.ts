import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterServiceConnectDefaultsRequest } from "./clusterserviceconnectdefaultsrequest";
import { ClusterSetting } from "./clustersetting";
import { Tag } from "./tag";
export declare class CreateClusterRequest extends SpeakeasyBase {
    capacityProviders?: string[];
    clusterName?: string;
    configuration?: ClusterConfiguration;
    defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];
    serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
    settings?: ClusterSetting[];
    tags?: Tag[];
}
