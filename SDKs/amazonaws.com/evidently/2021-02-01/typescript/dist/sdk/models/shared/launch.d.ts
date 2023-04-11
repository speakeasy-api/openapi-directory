import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchExecution } from "./launchexecution";
import { LaunchGroup } from "./launchgroup";
import { LaunchStatusEnum } from "./launchstatusenum";
import { LaunchTypeEnum } from "./launchtypeenum";
import { MetricMonitor } from "./metricmonitor";
import { ScheduledSplitsLaunchDefinition } from "./scheduledsplitslaunchdefinition";
/**
 * This structure contains the configuration details of one Evidently launch.
 */
export declare class Launch extends SpeakeasyBase {
    arn: string;
    createdTime: Date;
    description?: string;
    execution?: LaunchExecution;
    groups?: LaunchGroup[];
    lastUpdatedTime: Date;
    metricMonitors?: MetricMonitor[];
    name: string;
    project?: string;
    randomizationSalt?: string;
    scheduledSplitsDefinition?: ScheduledSplitsLaunchDefinition;
    status: LaunchStatusEnum;
    statusReason?: string;
    tags?: Record<string, string>;
    type: LaunchTypeEnum;
}
