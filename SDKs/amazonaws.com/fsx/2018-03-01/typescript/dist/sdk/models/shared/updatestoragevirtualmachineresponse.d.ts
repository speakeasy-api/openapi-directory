import { SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachine } from "./storagevirtualmachine";
/**
 * Success
 */
export declare class UpdateStorageVirtualMachineResponse extends SpeakeasyBase {
    /**
     * Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.
     */
    storageVirtualMachine?: StorageVirtualMachine;
}
