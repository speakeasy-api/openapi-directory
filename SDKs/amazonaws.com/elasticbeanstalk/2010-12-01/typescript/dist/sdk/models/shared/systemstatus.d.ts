import { SpeakeasyBase } from "../../../internal/utils";
import { CPUUtilization } from "./cpuutilization";
/**
 * CPU utilization and load average metrics for an Amazon EC2 instance.
 */
export declare class SystemStatus extends SpeakeasyBase {
    cpuUtilization?: CPUUtilization;
    loadAverage?: number[];
}
