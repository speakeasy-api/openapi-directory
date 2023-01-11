import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserInfo
/** 
 * Information about a single user.
**/
export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=developer" })
  developer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=viewer" })
  viewer?: boolean;
}
