import { SpeakeasyBase } from "../../../internal/utils";
import { PartyIdentification2 } from "./partyidentification2";
export declare class BankAccountV3 extends SpeakeasyBase {
    accountHolder: PartyIdentification2;
    /**
     * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
     */
    accountIdentification: any;
}
