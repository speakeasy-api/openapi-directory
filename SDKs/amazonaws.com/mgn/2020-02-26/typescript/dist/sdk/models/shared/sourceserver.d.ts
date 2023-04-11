import { SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInfo } from "./datareplicationinfo";
import { LaunchedInstance } from "./launchedinstance";
import { LifeCycle } from "./lifecycle";
import { ReplicationTypeEnum } from "./replicationtypeenum";
import { SourceProperties } from "./sourceproperties";
/**
 * Success
 */
export declare class SourceServer extends SpeakeasyBase {
    applicationID?: string;
    arn?: string;
    dataReplicationInfo?: DataReplicationInfo;
    fqdnForActionFramework?: string;
    isArchived?: boolean;
    launchedInstance?: LaunchedInstance;
    lifeCycle?: LifeCycle;
    replicationType?: ReplicationTypeEnum;
    sourceProperties?: SourceProperties;
    sourceServerID?: string;
    tags?: Record<string, string>;
    userProvidedID?: string;
    vcenterClientID?: string;
}
