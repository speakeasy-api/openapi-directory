import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountInfo } from "./bankaccountinfo";
import { CapabilityProblem } from "./capabilityproblem";
import { DocumentReference } from "./documentreference";
import { SupportingEntityCapability } from "./supportingentitycapability";
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
     * List of capabilities for this supporting entity.
     */
    capabilities?: Record<string, SupportingEntityCapability>;
    /**
     * List of documents uploaded for the transfer instrument.
     */
    documentDetails?: DocumentReference[];
    /**
     * The unique identifier of the transfer instrument.
     */
    id: string;
    /**
     * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.
     */
    legalEntityId: string;
    /**
     * List of the verification errors from capabilities for this supporting entity.
     */
    problems?: CapabilityProblem[];
    /**
     * The type of transfer instrument.
     *
     * @remarks
     *
     * Possible value: **bankAccount**.
     */
    type: TransferInstrumentTypeEnum;
}
