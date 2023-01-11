import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetContractsLink } from "./linksgetcontractslink";
import { LinksCreateContractLink } from "./linkscreatecontractlink";



export class CreateContractResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contracts" })
  contracts?: LinksGetContractsLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksCreateContractLink;
}
