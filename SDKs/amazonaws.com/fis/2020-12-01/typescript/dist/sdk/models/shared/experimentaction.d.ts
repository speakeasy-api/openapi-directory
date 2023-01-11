import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentActionState } from "./experimentactionstate";
export declare class ExperimentAction extends SpeakeasyBase {
    actionId?: string;
    description?: string;
    parameters?: Record<string, string>;
    startAfter?: string[];
    state?: ExperimentActionState;
    targets?: Record<string, string>;
}
