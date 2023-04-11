import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The voucher offer type.
 */
export declare enum ItvVoucherOfferTypeEnum {
    Stripe = "stripe",
    TalonOne = "talon one"
}
/**
 * Avalable voucher, if any.
 */
export declare class ItvVoucher extends SpeakeasyBase {
    display: Record<string, any>;
    /**
     * The coupon/voucher.
     */
    id: string;
    links: Record<string, any>;
    /**
     * The voucher offer type.
     */
    offerType: ItvVoucherOfferTypeEnum;
}
