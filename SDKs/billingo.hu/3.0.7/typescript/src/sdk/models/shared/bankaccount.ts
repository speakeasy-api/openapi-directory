import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



export class BankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=account_number_iban" })
  accountNumberIban?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=need_qr" })
  needQr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=swift" })
  swift?: string;
}


export class BankAccountInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=account_number_iban" })
  accountNumberIban?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=need_qr" })
  needQr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=swift" })
  swift?: string;
}
