import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { InternalPartyIdentification } from "./internalpartyidentification";
import { PartyIdentification } from "./partyidentification";
export declare class TransferInfoOld extends SpeakeasyBase {
    amount: Amount;
    /**
     * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description will be truncated in the webhooks that you receive about the transfer.
     */
    description?: string;
    destination: PartyIdentification;
    /**
     * Your unique reference for the transfer. You can use alphanumeric characters and hyphens. Maximum length: 80 characters.
     */
    reference?: string;
    source: InternalPartyIdentification;
}
