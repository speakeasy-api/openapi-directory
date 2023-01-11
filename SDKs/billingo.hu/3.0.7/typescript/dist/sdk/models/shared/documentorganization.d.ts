import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { DocumentBankAccount } from "./documentbankaccount";
export declare class DocumentOrganization extends SpeakeasyBase {
    address?: Address;
    bankAccount?: DocumentBankAccount;
    cashSettled?: boolean;
    euTaxNumber?: string;
    evNumber?: string;
    name?: string;
    smallTaxpayer?: boolean;
    taxNumber?: string;
}
