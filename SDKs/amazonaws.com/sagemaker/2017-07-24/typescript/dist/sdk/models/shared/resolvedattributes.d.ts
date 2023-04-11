import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobCompletionCriteria } from "./automljobcompletioncriteria";
import { AutoMLJobObjective } from "./automljobobjective";
import { ProblemTypeEnum } from "./problemtypeenum";
/**
 * The resolved attributes.
 */
export declare class ResolvedAttributes extends SpeakeasyBase {
    /**
     * Specifies a metric to minimize or maximize as the objective of a job. V2 API jobs (for example jobs created by calling <code>CreateAutoMLJobV2</code>), support <code>Accuracy</code> only.
     */
    autoMLJobObjective?: AutoMLJobObjective;
    /**
     * How long a job is allowed to run, or how many candidates a job is allowed to generate.
     */
    completionCriteria?: AutoMLJobCompletionCriteria;
    problemType?: ProblemTypeEnum;
}
