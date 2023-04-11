import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Elastic IP address transfer status.
 */
export declare enum EnableAddressTransferResultAddressTransferAddressTransferStatusEnum {
    Pending = "pending",
    Disabled = "disabled",
    Accepted = "accepted"
}
/**
 * An Elastic IP address transfer.
 */
export declare class EnableAddressTransferResultAddressTransfer extends SpeakeasyBase {
    addressTransferStatus?: EnableAddressTransferResultAddressTransferAddressTransferStatusEnum;
    allocationId?: string;
    publicIp?: string;
    transferAccountId?: string;
    transferOfferAcceptedTimestamp?: Date;
    transferOfferExpirationTimestamp?: Date;
}
/**
 * Success
 */
export declare class EnableAddressTransferResult extends SpeakeasyBase {
    addressTransfer?: EnableAddressTransferResultAddressTransfer;
}
