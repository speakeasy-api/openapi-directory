import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetPublicationsLink } from "./linksgetpublicationslink";



export class AccountPublicationsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetPublicationsLink;
}
