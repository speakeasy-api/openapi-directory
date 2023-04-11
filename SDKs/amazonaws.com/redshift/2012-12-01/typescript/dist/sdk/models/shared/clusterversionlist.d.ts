import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a cluster version, including the parameter group family and description of the version.
 */
export declare class ClusterVersionList extends SpeakeasyBase {
    clusterParameterGroupFamily?: string;
    clusterVersion?: string;
    description?: string;
}
