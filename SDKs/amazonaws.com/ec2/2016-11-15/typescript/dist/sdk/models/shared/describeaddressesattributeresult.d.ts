import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The updated PTR record for the IP address.
 */
export declare class DescribeAddressesAttributeResultAddressesPtrRecordUpdate extends SpeakeasyBase {
    reason?: string;
    status?: string;
    value?: string;
}
/**
 * The attributes associated with an Elastic IP address.
 */
export declare class DescribeAddressesAttributeResultAddresses extends SpeakeasyBase {
    allocationId?: string;
    ptrRecord?: string;
    ptrRecordUpdate?: DescribeAddressesAttributeResultAddressesPtrRecordUpdate;
    publicIp?: string;
}
/**
 * Success
 */
export declare class DescribeAddressesAttributeResult extends SpeakeasyBase {
    addresses?: DescribeAddressesAttributeResultAddresses[];
    nextToken?: string;
}
