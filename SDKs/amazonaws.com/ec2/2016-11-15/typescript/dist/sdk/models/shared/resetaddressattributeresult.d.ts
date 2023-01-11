import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The updated PTR record for the IP address.
**/
export declare class ResetAddressAttributeResultAddressPtrRecordUpdate extends SpeakeasyBase {
    reason?: Record<string, any>;
    status?: Record<string, any>;
    value?: Record<string, any>;
}
/**
 * Information about the IP address.
**/
export declare class ResetAddressAttributeResultAddress extends SpeakeasyBase {
    allocationId?: Record<string, any>;
    ptrRecord?: Record<string, any>;
    ptrRecordUpdate?: ResetAddressAttributeResultAddressPtrRecordUpdate;
    publicIp?: Record<string, any>;
}
export declare class ResetAddressAttributeResult extends SpeakeasyBase {
    address?: ResetAddressAttributeResultAddress;
}
