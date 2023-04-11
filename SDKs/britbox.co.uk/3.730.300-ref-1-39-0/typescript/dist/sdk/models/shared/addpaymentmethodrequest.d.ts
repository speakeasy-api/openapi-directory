import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of payment method.
 */
export declare enum AddPaymentMethodRequestTypeEnum {
    Card = "Card"
}
/**
 * Registration details for a new payment method.
 */
export declare class AddPaymentMethodRequest extends SpeakeasyBase {
    /**
     * Whether this payment method should become the account default when
     *
     * @remarks
     * making purchases.
     *
     * Note that if this is the first payment method of type Card being added to an
     * account then it will become the default whether this property is true or false.
     *
     */
    makeDefault?: boolean;
    /**
     * The payment provider token representing a payment method, obtained by
     *
     * @remarks
     * submitting payment method details to your third party provider.
     *
     */
    token: string;
    /**
     * The type of payment method.
     */
    type: AddPaymentMethodRequestTypeEnum;
}
