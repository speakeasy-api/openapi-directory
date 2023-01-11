import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { CreateContractResponseLinks } from "./createcontractresponselinks";



export class CreateContractResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: BeezUpCommonInfoSummaries;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CreateContractResponseLinks;
}
