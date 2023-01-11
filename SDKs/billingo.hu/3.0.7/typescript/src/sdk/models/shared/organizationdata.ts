import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrganizationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;
}
