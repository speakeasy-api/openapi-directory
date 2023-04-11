import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The updated PTR record for the IP address.
 */
export declare class ModifyAddressAttributeResultAddressPtrRecordUpdate extends SpeakeasyBase {
    reason?: string;
    status?: string;
    value?: string;
}
/**
 * Information about the Elastic IP address.
 */
export declare class ModifyAddressAttributeResultAddress extends SpeakeasyBase {
    allocationId?: string;
    ptrRecord?: string;
    ptrRecordUpdate?: ModifyAddressAttributeResultAddressPtrRecordUpdate;
    publicIp?: string;
}
/**
 * Success
 */
export declare class ModifyAddressAttributeResult extends SpeakeasyBase {
    address?: ModifyAddressAttributeResultAddress;
}
