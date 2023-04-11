import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaConfigurationList } from "./replicaconfigurationlist";
export declare class DecreaseReplicaCountMessage extends SpeakeasyBase {
    applyImmediately: boolean;
    newReplicaCount?: number;
    replicaConfiguration?: ReplicaConfigurationList[];
    replicasToRemove?: string[];
    replicationGroupId: string;
}
