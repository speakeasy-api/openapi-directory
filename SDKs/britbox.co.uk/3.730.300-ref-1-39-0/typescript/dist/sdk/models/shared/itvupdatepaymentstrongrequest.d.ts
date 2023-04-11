import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of change card details request.
 */
export declare class ItvUpdatePaymentStrongRequest extends SpeakeasyBase {
    /**
     * A paymentMethodFromToken.
     */
    paymentMethodFromToken?: string;
    /**
     * The paymentMethodId from Stripe.
     */
    paymentMethodId?: string;
    /**
     * The ITV profile token.
     */
    profileToken: string;
}
