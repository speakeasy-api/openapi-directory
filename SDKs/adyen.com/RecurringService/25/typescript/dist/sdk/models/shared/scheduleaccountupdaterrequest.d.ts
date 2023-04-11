import { SpeakeasyBase } from "../../../internal/utils";
import { Card } from "./card";
export declare class ScheduleAccountUpdaterRequest extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be required for a particular request.
     */
    additionalData?: Record<string, string>;
    card?: Card;
    /**
     * Account of the merchant.
     */
    merchantAccount: string;
    /**
     * A reference that merchants can apply for the call.
     */
    reference: string;
    /**
     * The selected detail recurring reference.
     *
     * @remarks
     *
     * Optional if `card` is provided.
     */
    selectedRecurringDetailReference?: string;
    /**
     * The reference of the shopper that owns the recurring contract.
     *
     * @remarks
     *
     * Optional if `card` is provided.
     */
    shopperReference?: string;
}
