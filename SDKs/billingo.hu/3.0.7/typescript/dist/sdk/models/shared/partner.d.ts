import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * Partner created successfully.
 */
export declare class Partner extends SpeakeasyBase {
    accountNumber?: string;
    address: Address;
    emails?: string[];
    generalLedgerNumber?: string;
    iban?: string;
    id?: number;
    name: string;
    phone?: string;
    swift?: string;
    taxcode?: string;
}
