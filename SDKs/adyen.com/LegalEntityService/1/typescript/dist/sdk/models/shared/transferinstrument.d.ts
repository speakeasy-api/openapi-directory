import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountInfo } from "./bankaccountinfo";
import { EntityReference } from "./entityreference";
/**
 * The type of transfer instrument.
 *
 * @remarks
 *
 * Possible value: **bankAccount**.
 */
export declare enum TransferInstrumentTypeEnum {
    BankAccount = "bankAccount",
    RecurringDetail = "recurringDetail"
}
/**
 * OK - the request has succeeded.
 */
export declare class TransferInstrument extends SpeakeasyBase {
    bankAccount: BankAccountInfo;
    /**
     * List of documents uploaded for the transfer instrument.
     */
    documents?: EntityReference[];
    /**
     * The unique identifier of the transfer instrument.
     */
    id: string;
    /**
     * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.
     */
    legalEntityId: string;
    /**
     * The type of transfer instrument.
     *
     * @remarks
     *
     * Possible value: **bankAccount**.
     */
    type: TransferInstrumentTypeEnum;
}
