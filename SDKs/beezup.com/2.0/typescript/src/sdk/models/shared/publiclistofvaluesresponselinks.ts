import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetPublicListOfValuesLink } from "./linksgetpubliclistofvalueslink";



export class PublicListOfValuesResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetPublicListOfValuesLink;
}
