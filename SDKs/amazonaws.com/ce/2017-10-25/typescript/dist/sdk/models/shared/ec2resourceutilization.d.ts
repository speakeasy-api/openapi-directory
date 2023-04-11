import { SpeakeasyBase } from "../../../internal/utils";
import { DiskResourceUtilization } from "./diskresourceutilization";
import { EBSResourceUtilization } from "./ebsresourceutilization";
import { NetworkResourceUtilization } from "./networkresourceutilization";
/**
 * Utilization metrics for the instance.
 */
export declare class Ec2ResourceUtilization extends SpeakeasyBase {
    diskResourceUtilization?: DiskResourceUtilization;
    ebsResourceUtilization?: EBSResourceUtilization;
    maxCpuUtilizationPercentage?: string;
    maxMemoryUtilizationPercentage?: string;
    maxStorageUtilizationPercentage?: string;
    networkResourceUtilization?: NetworkResourceUtilization;
}
