import { SpeakeasyBase } from "../../../internal/utils";
import { VmwareTag } from "./vmwaretag";
/**
 * Your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names (ARNs).
 */
export declare class VirtualMachineDetails extends SpeakeasyBase {
    hostName?: string;
    hypervisorId?: string;
    lastBackupDate?: Date;
    name?: string;
    path?: string;
    resourceArn?: string;
    vmwareTags?: VmwareTag[];
}
