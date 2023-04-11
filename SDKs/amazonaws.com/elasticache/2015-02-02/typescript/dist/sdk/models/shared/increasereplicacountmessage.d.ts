import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaConfigurationList } from "./replicaconfigurationlist";
export declare class IncreaseReplicaCountMessage extends SpeakeasyBase {
    applyImmediately: boolean;
    newReplicaCount?: number;
    replicaConfiguration?: ReplicaConfigurationList[];
    replicationGroupId: string;
}
