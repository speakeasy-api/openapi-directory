import { SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInfo } from "./datareplicationinfo";
import { LastLaunchResultEnum } from "./lastlaunchresultenum";
import { LifeCycle } from "./lifecycle";
import { ReplicationDirectionEnum } from "./replicationdirectionenum";
import { SourceCloudProperties } from "./sourcecloudproperties";
import { SourceProperties } from "./sourceproperties";
import { StagingArea } from "./stagingarea";
/**
 * Success
 */
export declare class SourceServer extends SpeakeasyBase {
    arn?: string;
    dataReplicationInfo?: DataReplicationInfo;
    lastLaunchResult?: LastLaunchResultEnum;
    lifeCycle?: LifeCycle;
    recoveryInstanceId?: string;
    replicationDirection?: ReplicationDirectionEnum;
    reversedDirectionSourceServerArn?: string;
    sourceCloudProperties?: SourceCloudProperties;
    sourceProperties?: SourceProperties;
    sourceServerID?: string;
    stagingArea?: StagingArea;
    tags?: Record<string, string>;
}
