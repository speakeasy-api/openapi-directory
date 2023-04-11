import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterServiceConnectDefaultsRequest } from "./clusterserviceconnectdefaultsrequest";
import { ClusterSetting } from "./clustersetting";
export declare class UpdateClusterRequest extends SpeakeasyBase {
    cluster: string;
    configuration?: ClusterConfiguration;
    serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
    settings?: ClusterSetting[];
}
