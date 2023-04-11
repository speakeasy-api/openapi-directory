import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { KernelCapabilities } from "./kernelcapabilities";
import { Tmpfs } from "./tmpfs";
/**
 * Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.
 */
export declare class LinuxParameters extends SpeakeasyBase {
    capabilities?: KernelCapabilities;
    devices?: Device[];
    initProcessEnabled?: boolean;
    maxSwap?: number;
    sharedMemorySize?: number;
    swappiness?: number;
    tmpfs?: Tmpfs[];
}
