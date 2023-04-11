import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { DataTieringStatusEnum } from "./datatieringstatusenum";
/**
 * Represents a copy of an entire cluster as of the time when the snapshot was taken.
 */
export declare class Snapshot extends SpeakeasyBase {
    arn?: string;
    clusterConfiguration?: ClusterConfiguration;
    dataTiering?: DataTieringStatusEnum;
    kmsKeyId?: string;
    name?: string;
    source?: string;
    status?: string;
}
