import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerResourceConfig } from "./workerresourceconfig";
/**
 * The initial capacity configuration per worker.
 */
export declare class InitialCapacityConfig extends SpeakeasyBase {
    workerConfiguration?: WorkerResourceConfig;
    workerCount: number;
}
