import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Elastic IP address transfer status.
 */
export declare enum DescribeAddressTransfersResultAddressTransfersAddressTransferStatusEnum {
    Pending = "pending",
    Disabled = "disabled",
    Accepted = "accepted"
}
/**
 * Details on the Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
 */
export declare class DescribeAddressTransfersResultAddressTransfers extends SpeakeasyBase {
    addressTransferStatus?: DescribeAddressTransfersResultAddressTransfersAddressTransferStatusEnum;
    allocationId?: string;
    publicIp?: string;
    transferAccountId?: string;
    transferOfferAcceptedTimestamp?: Date;
    transferOfferExpirationTimestamp?: Date;
}
/**
 * Success
 */
export declare class DescribeAddressTransfersResult extends SpeakeasyBase {
    addressTransfers?: DescribeAddressTransfersResultAddressTransfers[];
    nextToken?: string;
}
