import { SpeakeasyBase } from "../../../internal/utils";
import { RunnerLabel } from "./runnerlabel";
/**
 * A self hosted runner
 */
export declare class Runner extends SpeakeasyBase {
    busy: boolean;
    /**
     * The id of the runner.
     */
    id: number;
    labels: RunnerLabel[];
    /**
     * The name of the runner.
     */
    name: string;
    /**
     * The Operating System of the runner.
     */
    os: string;
    /**
     * The status of the runner.
     */
    status: string;
}
