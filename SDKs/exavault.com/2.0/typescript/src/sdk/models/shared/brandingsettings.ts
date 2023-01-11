import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BrandingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=customEmail" })
  customEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=logoExt" })
  logoExt?: string;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;

  @SpeakeasyMetadata({ data: "json, name=verifiedDomain" })
  verifiedDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=verifiedDomainId" })
  verifiedDomainId?: string;

  @SpeakeasyMetadata({ data: "json, name=verifiedDomainValid" })
  verifiedDomainValid?: boolean;
}
