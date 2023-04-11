import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * PartnerUpsert object that you would like to store.
 */
export declare class PartnerUpsert extends SpeakeasyBase {
    accountNumber?: string;
    address: Address;
    emails?: string[];
    generalLedgerNumber?: string;
    iban?: string;
    name: string;
    phone?: string;
    swift?: string;
    taxcode?: string;
}
