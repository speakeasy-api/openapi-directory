import { SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachineFilter } from "./storagevirtualmachinefilter";
export declare class DescribeStorageVirtualMachinesRequest extends SpeakeasyBase {
    filters?: StorageVirtualMachineFilter[];
    /**
     * The maximum number of resources to return in the response. This value must be an integer greater than zero.
     */
    maxResults?: number;
    /**
     * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
     */
    nextToken?: string;
    storageVirtualMachineIds?: string[];
}
