import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentExecution } from "./experimentexecution";
import { ExperimentSchedule } from "./experimentschedule";
import { ExperimentStatusEnum } from "./experimentstatusenum";
import { ExperimentTypeEnum } from "./experimenttypeenum";
import { MetricGoal } from "./metricgoal";
import { OnlineAbDefinition } from "./onlineabdefinition";
import { Treatment } from "./treatment";
/**
 * A structure containing the configuration details of an experiment.
 */
export declare class Experiment extends SpeakeasyBase {
    arn: string;
    createdTime: Date;
    description?: string;
    execution?: ExperimentExecution;
    lastUpdatedTime: Date;
    metricGoals?: MetricGoal[];
    name: string;
    onlineAbDefinition?: OnlineAbDefinition;
    project?: string;
    randomizationSalt?: string;
    samplingRate?: number;
    schedule?: ExperimentSchedule;
    segment?: string;
    status: ExperimentStatusEnum;
    statusReason?: string;
    tags?: Record<string, string>;
    treatments?: Treatment[];
    type: ExperimentTypeEnum;
}
