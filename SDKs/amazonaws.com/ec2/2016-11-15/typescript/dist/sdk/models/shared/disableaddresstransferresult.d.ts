import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Elastic IP address transfer status.
 */
export declare enum DisableAddressTransferResultAddressTransferAddressTransferStatusEnum {
    Pending = "pending",
    Disabled = "disabled",
    Accepted = "accepted"
}
/**
 * An Elastic IP address transfer.
 */
export declare class DisableAddressTransferResultAddressTransfer extends SpeakeasyBase {
    addressTransferStatus?: DisableAddressTransferResultAddressTransferAddressTransferStatusEnum;
    allocationId?: string;
    publicIp?: string;
    transferAccountId?: string;
    transferOfferAcceptedTimestamp?: Date;
    transferOfferExpirationTimestamp?: Date;
}
/**
 * Success
 */
export declare class DisableAddressTransferResult extends SpeakeasyBase {
    addressTransfer?: DisableAddressTransferResultAddressTransfer;
}
