import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentActionState } from "./experimentactionstate";
/**
 * Describes the action for an experiment.
 */
export declare class ExperimentAction extends SpeakeasyBase {
    actionId?: string;
    description?: string;
    endTime?: Date;
    parameters?: Record<string, string>;
    startAfter?: string[];
    startTime?: Date;
    state?: ExperimentActionState;
    targets?: Record<string, string>;
}
