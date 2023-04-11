import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentAction } from "./experimentaction";
import { ExperimentLogConfiguration } from "./experimentlogconfiguration";
import { ExperimentState } from "./experimentstate";
import { ExperimentStopCondition } from "./experimentstopcondition";
import { ExperimentTarget } from "./experimenttarget";
/**
 * Describes an experiment.
 */
export declare class Experiment extends SpeakeasyBase {
    actions?: Record<string, ExperimentAction>;
    creationTime?: Date;
    endTime?: Date;
    experimentTemplateId?: string;
    id?: string;
    logConfiguration?: ExperimentLogConfiguration;
    roleArn?: string;
    startTime?: Date;
    state?: ExperimentState;
    stopConditions?: ExperimentStopCondition[];
    tags?: Record<string, string>;
    targets?: Record<string, ExperimentTarget>;
}
