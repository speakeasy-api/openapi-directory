import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The status of the sweep. If not provided, by default, this is set to **active**.
 *
 * @remarks
 *
 * Possible values:
 *
 *  * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration.
 *
 *  * **inactive**: the sweep is disabled and cannot be triggered.
 *
 *
 */
export declare enum SweepConfigurationStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.
 *
 * @remarks
 *
 * Possible values:
 *
 *  * **push**: _push out funds_ to a destination balance account or transfer instrument.
 *
 *  * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.
 */
export declare enum SweepConfigurationTypeEnum {
    Pull = "pull",
    Push = "push"
}
export declare class SweepConfigurationInput extends SpeakeasyBase {
    /**
     * The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     *
     * @remarks
     *
     *  You can only use this for periodic sweep schedules such as `schedule.type` **daily** or **monthly**.
     */
    balanceAccountId?: string;
    /**
     * The merchant account that will be the source of funds. You can only use this if you are processing payments with Adyen. This can only be used for sweeps of `type` **pull** and `schedule.type` **balance**.
     */
    merchantAccount?: string;
    /**
     * The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.
     */
    schedule: any;
    /**
     * The status of the sweep. If not provided, by default, this is set to **active**.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration.
     *
     *  * **inactive**: the sweep is disabled and cannot be triggered.
     *
     *
     */
    status?: SweepConfigurationStatusEnum;
    sweepAmount?: Amount;
    targetAmount?: Amount;
    /**
     * The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).
     *
     * @remarks
     *
     * You can also use this in combination with a `merchantAccount` and a `type` **pull** to start a direct debit request from the source transfer instrument. To use this feature, reach out to your Adyen contact.
     */
    transferInstrumentId?: string;
    triggerAmount?: Amount;
    /**
     * The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **push**: _push out funds_ to a destination balance account or transfer instrument.
     *
     *  * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.
     */
    type?: SweepConfigurationTypeEnum;
}
export declare class SweepConfiguration extends SpeakeasyBase {
    /**
     * The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     *
     * @remarks
     *
     *  You can only use this for periodic sweep schedules such as `schedule.type` **daily** or **monthly**.
     */
    balanceAccountId?: string;
    /**
     * The unique identifier of the sweep.
     */
    id: string;
    /**
     * The merchant account that will be the source of funds. You can only use this if you are processing payments with Adyen. This can only be used for sweeps of `type` **pull** and `schedule.type` **balance**.
     */
    merchantAccount?: string;
    /**
     * The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.
     */
    schedule: any;
    /**
     * The status of the sweep. If not provided, by default, this is set to **active**.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration.
     *
     *  * **inactive**: the sweep is disabled and cannot be triggered.
     *
     *
     */
    status?: SweepConfigurationStatusEnum;
    sweepAmount?: Amount;
    targetAmount?: Amount;
    /**
     * The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).
     *
     * @remarks
     *
     * You can also use this in combination with a `merchantAccount` and a `type` **pull** to start a direct debit request from the source transfer instrument. To use this feature, reach out to your Adyen contact.
     */
    transferInstrumentId?: string;
    triggerAmount?: Amount;
    /**
     * The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **push**: _push out funds_ to a destination balance account or transfer instrument.
     *
     *  * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.
     */
    type?: SweepConfigurationTypeEnum;
}
