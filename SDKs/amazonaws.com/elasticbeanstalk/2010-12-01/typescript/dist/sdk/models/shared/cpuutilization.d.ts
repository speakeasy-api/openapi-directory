import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CPU utilization metrics for an instance.
 */
export declare class CPUUtilization extends SpeakeasyBase {
    ioWait?: number;
    irq?: number;
    idle?: number;
    nice?: number;
    privileged?: number;
    softIRQ?: number;
    system?: number;
    user?: number;
}
