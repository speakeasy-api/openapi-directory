import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicLovIndexLinks } from "./publiclovindexlinks";



export class PublicLovIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: PublicLovIndexLinks;
}
