import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Account } from "./account";
import { Resource } from "./resource";



// UserResponse
/** 
 * Response object for users.
**/
export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: User;

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
