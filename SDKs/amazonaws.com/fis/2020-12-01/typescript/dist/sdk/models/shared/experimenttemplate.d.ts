import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateAction } from "./experimenttemplateaction";
import { ExperimentTemplateStopCondition } from "./experimenttemplatestopcondition";
import { ExperimentTemplateTarget } from "./experimenttemplatetarget";
/**
 * Describes an experiment template.
**/
export declare class ExperimentTemplate extends SpeakeasyBase {
    actions?: Record<string, ExperimentTemplateAction>;
    creationTime?: Date;
    description?: string;
    id?: string;
    lastUpdateTime?: Date;
    roleArn?: string;
    stopConditions?: ExperimentTemplateStopCondition[];
    tags?: Record<string, string>;
    targets?: Record<string, ExperimentTemplateTarget>;
}
