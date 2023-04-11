import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaSettingsDescription } from "./replicasettingsdescription";
/**
 * Success
 */
export declare class DescribeGlobalTableSettingsOutput extends SpeakeasyBase {
    globalTableName?: string;
    replicaSettings?: ReplicaSettingsDescription[];
}
