import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The updated PTR record for the IP address.
**/
export declare class ModifyAddressAttributeResultAddressPtrRecordUpdate extends SpeakeasyBase {
    reason?: Record<string, any>;
    status?: Record<string, any>;
    value?: Record<string, any>;
}
/**
 * Information about the Elastic IP address.
**/
export declare class ModifyAddressAttributeResultAddress extends SpeakeasyBase {
    allocationId?: Record<string, any>;
    ptrRecord?: Record<string, any>;
    ptrRecordUpdate?: ModifyAddressAttributeResultAddressPtrRecordUpdate;
    publicIp?: Record<string, any>;
}
export declare class ModifyAddressAttributeResult extends SpeakeasyBase {
    address?: ModifyAddressAttributeResultAddress;
}
