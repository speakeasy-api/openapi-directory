import { SpeakeasyBase } from "../../../internal/utils";
import { HypervisorStateEnum } from "./hypervisorstateenum";
/**
 * <p>Represents the hypervisor's permissions to which the gateway will connect.</p> <p>A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.</p>
 */
export declare class Hypervisor extends SpeakeasyBase {
    host?: string;
    hypervisorArn?: string;
    kmsKeyArn?: string;
    name?: string;
    state?: HypervisorStateEnum;
}
