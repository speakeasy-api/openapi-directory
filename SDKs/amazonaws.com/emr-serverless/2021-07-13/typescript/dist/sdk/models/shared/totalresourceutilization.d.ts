import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The aggregate vCPU, memory, and storage resources used from the time job start executing till the time job is terminated, rounded up to the nearest second.
 */
export declare class TotalResourceUtilization extends SpeakeasyBase {
    memoryGBHour?: number;
    storageGBHour?: number;
    vCPUHour?: number;
}
