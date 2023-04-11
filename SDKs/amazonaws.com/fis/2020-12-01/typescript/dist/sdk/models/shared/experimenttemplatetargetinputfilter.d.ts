import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Specifies a filter used for the target resource input in an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export declare class ExperimentTemplateTargetInputFilter extends SpeakeasyBase {
    path: string;
    values: string[];
}
