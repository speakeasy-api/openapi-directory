import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A virtual machine that is on a hypervisor.
 */
export declare class VirtualMachine extends SpeakeasyBase {
    hostName?: string;
    hypervisorId?: string;
    lastBackupDate?: Date;
    name?: string;
    path?: string;
    resourceArn?: string;
}
