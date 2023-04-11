import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaSettingsDescription } from "./replicasettingsdescription";
/**
 * Success
 */
export declare class UpdateGlobalTableSettingsOutput extends SpeakeasyBase {
    globalTableName?: string;
    replicaSettings?: ReplicaSettingsDescription[];
}
