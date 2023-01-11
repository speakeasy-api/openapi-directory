import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link3 } from "./link3";



export class SubscriptionLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activate" })
  activate?: Link3;

  @SpeakeasyMetadata({ data: "json, name=deactivate" })
  deactivate?: Link3;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: Link3;

  @SpeakeasyMetadata({ data: "json, name=reporting" })
  reporting?: Link3;

  @SpeakeasyMetadata({ data: "json, name=retry" })
  retry?: Link3;
}
