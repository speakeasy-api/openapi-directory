import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachine } from "./virtualmachine";
/**
 * Success
 */
export declare class ListVirtualMachinesOutput extends SpeakeasyBase {
    nextToken?: string;
    virtualMachines?: VirtualMachine[];
}
