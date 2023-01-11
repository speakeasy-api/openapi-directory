import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserLovIndexLinks } from "./userlovindexlinks";



export class UserLovIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: UserLovIndexLinks;
}
