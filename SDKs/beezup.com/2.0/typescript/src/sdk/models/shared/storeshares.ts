import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreSharesLinks } from "./storeshareslinks";
import { StoreShare } from "./storeshare";



export class StoreShares extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: StoreSharesLinks;

  @SpeakeasyMetadata({ data: "json, name=shares", elemType: StoreShare })
  shares: StoreShare[];
}
