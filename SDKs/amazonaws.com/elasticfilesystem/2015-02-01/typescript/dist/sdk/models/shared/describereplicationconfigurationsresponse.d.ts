import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationDescription } from "./replicationconfigurationdescription";
/**
 * Success
 */
export declare class DescribeReplicationConfigurationsResponse extends SpeakeasyBase {
    nextToken?: string;
    replications?: ReplicationConfigurationDescription[];
}
