import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteNextContractLink } from "./linksdeletenextcontractlink";



export class NextContractInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: LinksDeleteNextContractLink;
}
