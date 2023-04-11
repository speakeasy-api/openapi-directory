import { SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachine } from "./storagevirtualmachine";
/**
 * Success
 */
export declare class DescribeStorageVirtualMachinesResponse extends SpeakeasyBase {
    /**
     * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
     */
    nextToken?: string;
    storageVirtualMachines?: StorageVirtualMachine[];
}
