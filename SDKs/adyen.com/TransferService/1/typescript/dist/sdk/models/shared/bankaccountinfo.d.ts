import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Name } from "./name";
export declare class BankAccountInfo extends SpeakeasyBase {
    address?: Address;
    /**
     * The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.
     */
    iban?: string;
    ownerName?: Name;
}
