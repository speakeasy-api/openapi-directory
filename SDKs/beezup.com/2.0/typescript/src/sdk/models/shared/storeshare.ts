import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreShareLinks } from "./storesharelinks";
import { StoreUserRoleEnum } from "./storeuserroleenum";



export class StoreShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: StoreShareLinks;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=userRole" })
  userRole: StoreUserRoleEnum;
}
