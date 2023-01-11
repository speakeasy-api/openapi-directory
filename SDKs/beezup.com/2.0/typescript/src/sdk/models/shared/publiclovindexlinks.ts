import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetPublicListOfValuesLink } from "./linksgetpubliclistofvalueslink";
import { LinksGetPublicLovIndexLink } from "./linksgetpubliclovindexlink";



export class PublicLovIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lists", elemType: LinksGetPublicListOfValuesLink })
  lists?: Record<string, LinksGetPublicListOfValuesLink>;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetPublicLovIndexLink;
}
