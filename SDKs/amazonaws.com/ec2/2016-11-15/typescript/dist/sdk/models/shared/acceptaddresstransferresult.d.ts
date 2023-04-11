import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Elastic IP address transfer status.
 */
export declare enum AcceptAddressTransferResultAddressTransferAddressTransferStatusEnum {
    Pending = "pending",
    Disabled = "disabled",
    Accepted = "accepted"
}
/**
 * An Elastic IP address transfer.
 */
export declare class AcceptAddressTransferResultAddressTransfer extends SpeakeasyBase {
    addressTransferStatus?: AcceptAddressTransferResultAddressTransferAddressTransferStatusEnum;
    allocationId?: string;
    publicIp?: string;
    transferAccountId?: string;
    transferOfferAcceptedTimestamp?: Date;
    transferOfferExpirationTimestamp?: Date;
}
/**
 * Success
 */
export declare class AcceptAddressTransferResult extends SpeakeasyBase {
    addressTransfer?: AcceptAddressTransferResultAddressTransfer;
}
