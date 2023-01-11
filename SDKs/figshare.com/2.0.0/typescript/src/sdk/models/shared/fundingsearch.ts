import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=search_for" })
  searchFor?: string;
}
