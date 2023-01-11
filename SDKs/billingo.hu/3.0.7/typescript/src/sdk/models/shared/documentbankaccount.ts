import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=account_number_iban" })
  accountNumberIban?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=swift" })
  swift?: string;
}
