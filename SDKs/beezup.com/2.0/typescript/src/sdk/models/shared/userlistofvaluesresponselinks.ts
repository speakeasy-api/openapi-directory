import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetUserListOfValuesLink } from "./linksgetuserlistofvalueslink";



export class UserListOfValuesResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetUserListOfValuesLink;
}
