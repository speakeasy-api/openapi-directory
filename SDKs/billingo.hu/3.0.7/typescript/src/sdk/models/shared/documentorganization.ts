import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { DocumentBankAccount } from "./documentbankaccount";



export class DocumentOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=bank_account" })
  bankAccount?: DocumentBankAccount;

  @SpeakeasyMetadata({ data: "json, name=cash_settled" })
  cashSettled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eu_tax_number" })
  euTaxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ev_number" })
  evNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=small_taxpayer" })
  smallTaxpayer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tax_number" })
  taxNumber?: string;
}
