import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountInfo } from "./bankaccountinfo";
/**
 * The type of transfer instrument.
 *
 * @remarks
 *
 * Possible value: **bankAccount**.
 */
export declare enum TransferInstrumentInfoTypeEnum {
    BankAccount = "bankAccount",
    RecurringDetail = "recurringDetail"
}
export declare class TransferInstrumentInfo extends SpeakeasyBase {
    bankAccount: BankAccountInfo;
    /**
     * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the transfer instrument.
     */
    legalEntityId: string;
    /**
     * The type of transfer instrument.
     *
     * @remarks
     *
     * Possible value: **bankAccount**.
     */
    type: TransferInstrumentInfoTypeEnum;
}
