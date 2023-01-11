import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { VatEnum } from "./vatenum";



export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=general_ledger_number" })
  generalLedgerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=general_ledger_taxcode" })
  generalLedgerTaxcode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=net_unit_price" })
  netUnitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: string;

  @SpeakeasyMetadata({ data: "json, name=vat" })
  vat: VatEnum;
}


export class ProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=general_ledger_number" })
  generalLedgerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=general_ledger_taxcode" })
  generalLedgerTaxcode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=net_unit_price" })
  netUnitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: string;

  @SpeakeasyMetadata({ data: "json, name=vat" })
  vat: VatEnum;
}
