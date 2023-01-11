import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonListOfValueItem } from "./beezupcommonlistofvalueitem";
import { UserListOfValuesResponseLinks } from "./userlistofvaluesresponselinks";



export class UserListOfValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BeezUpCommonListOfValueItem })
  items?: BeezUpCommonListOfValueItem[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: UserListOfValuesResponseLinks;
}
