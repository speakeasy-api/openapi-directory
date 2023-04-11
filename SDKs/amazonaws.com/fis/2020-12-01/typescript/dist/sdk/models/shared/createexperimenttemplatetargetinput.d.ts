import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetInputFilter } from "./experimenttemplatetargetinputfilter";
/**
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export declare class CreateExperimentTemplateTargetInput extends SpeakeasyBase {
    filters?: ExperimentTemplateTargetInputFilter[];
    parameters?: Record<string, string>;
    resourceArns?: string[];
    resourceTags?: Record<string, string>;
    resourceType: string;
    selectionMode: string;
}
