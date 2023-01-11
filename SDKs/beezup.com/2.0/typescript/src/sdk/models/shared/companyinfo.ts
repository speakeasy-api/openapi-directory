import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingEmails" })
  accountingEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company: string;

  @SpeakeasyMetadata({ data: "json, name=countryIsoCodeAlpha3" })
  countryIsoCodeAlpha3: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=vatNumber" })
  vatNumber?: string;
}
