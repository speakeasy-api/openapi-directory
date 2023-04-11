import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A tag on an IPAM resource.
 */
export declare class ModifyIpamPoolRequestAddAllocationResourceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * A tag on an IPAM resource.
 */
export declare class ModifyIpamPoolRequestRemoveAllocationResourceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class ModifyIpamPoolRequest extends SpeakeasyBase {
    addAllocationResourceTags?: ModifyIpamPoolRequestAddAllocationResourceTags[];
    allocationDefaultNetmaskLength?: number;
    allocationMaxNetmaskLength?: number;
    allocationMinNetmaskLength?: number;
    autoImport?: boolean;
    clearAllocationDefaultNetmaskLength?: boolean;
    description?: string;
    dryRun?: boolean;
    ipamPoolId: string;
    removeAllocationResourceTags?: ModifyIpamPoolRequestRemoveAllocationResourceTags[];
}
