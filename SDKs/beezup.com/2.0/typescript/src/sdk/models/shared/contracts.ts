import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrentContractInfo } from "./currentcontractinfo";
import { ContractsLinks } from "./contractslinks";
import { NextContractInfo } from "./nextcontractinfo";



export class Contracts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CurrentContractInfo;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ContractsLinks;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: NextContractInfo;
}
