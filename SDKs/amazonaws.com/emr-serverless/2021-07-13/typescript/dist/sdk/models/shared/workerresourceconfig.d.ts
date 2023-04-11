import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cumulative configuration requirements for every worker instance of the worker type.
 */
export declare class WorkerResourceConfig extends SpeakeasyBase {
    cpu: string;
    disk?: string;
    memory: string;
}
