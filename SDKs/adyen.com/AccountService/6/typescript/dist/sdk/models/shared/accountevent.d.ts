import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The event.
 *
 * @remarks
 * >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.
 * For more information, refer to [Verification checks](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).
 */
export declare enum AccountEventEventEnum {
    InactivateAccount = "InactivateAccount",
    RefundNotPaidOutTransfers = "RefundNotPaidOutTransfers"
}
export declare class AccountEvent extends SpeakeasyBase {
    /**
     * The event.
     *
     * @remarks
     * >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.
     * For more information, refer to [Verification checks](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).
     */
    event?: AccountEventEventEnum;
    /**
     * The date on which the event will take place.
     */
    executionDate?: Date;
    /**
     * The reason why this event has been created.
     */
    reason?: string;
}
