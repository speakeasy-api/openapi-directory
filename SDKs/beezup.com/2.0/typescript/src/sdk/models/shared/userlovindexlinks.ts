import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetUserListOfValuesLink } from "./linksgetuserlistofvalueslink";
import { LinksGetUserLovIndexLink } from "./linksgetuserlovindexlink";



export class UserLovIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lists", elemType: LinksGetUserListOfValuesLink })
  lists?: Record<string, LinksGetUserListOfValuesLink>;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetUserLovIndexLink;
}
