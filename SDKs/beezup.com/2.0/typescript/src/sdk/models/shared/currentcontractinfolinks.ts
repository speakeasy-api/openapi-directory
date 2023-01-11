import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksTerminateCurrentContractLink } from "./linksterminatecurrentcontractlink";
import { LinksReactivateCurrentContractLink } from "./linksreactivatecurrentcontractlink";



export class CurrentContractInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disable" })
  disable?: LinksTerminateCurrentContractLink;

  @SpeakeasyMetadata({ data: "json, name=reenable" })
  reenable?: LinksReactivateCurrentContractLink;
}
