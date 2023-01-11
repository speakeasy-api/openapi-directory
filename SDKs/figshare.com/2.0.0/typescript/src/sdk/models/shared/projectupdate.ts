import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingCreate } from "./fundingcreate";



export class ProjectUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=funding" })
  funding?: string;

  @SpeakeasyMetadata({ data: "json, name=funding_list", elemType: FundingCreate })
  fundingList?: FundingCreate[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
