import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The updated PTR record for the IP address.
 */
export declare class ResetAddressAttributeResultAddressPtrRecordUpdate extends SpeakeasyBase {
    reason?: string;
    status?: string;
    value?: string;
}
/**
 * Information about the IP address.
 */
export declare class ResetAddressAttributeResultAddress extends SpeakeasyBase {
    allocationId?: string;
    ptrRecord?: string;
    ptrRecordUpdate?: ResetAddressAttributeResultAddressPtrRecordUpdate;
    publicIp?: string;
}
/**
 * Success
 */
export declare class ResetAddressAttributeResult extends SpeakeasyBase {
    address?: ResetAddressAttributeResultAddress;
}
