import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains data processing unit (DPU) configuration settings and parameter mappings for a notebook engine.
 */
export declare class EngineConfiguration extends SpeakeasyBase {
    additionalConfigs?: Record<string, string>;
    coordinatorDpuSize?: number;
    defaultExecutorDpuSize?: number;
    maxConcurrentDpus: number;
}
