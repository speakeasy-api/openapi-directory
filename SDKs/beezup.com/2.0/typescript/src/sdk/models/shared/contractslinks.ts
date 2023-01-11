import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateContractLink } from "./linkscreatecontractlink";
import { LinksGetContractsLink } from "./linksgetcontractslink";



export class ContractsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: LinksCreateContractLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetContractsLink;
}
