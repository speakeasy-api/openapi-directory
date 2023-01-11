import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlatLocalesEnum } from "./flatlocalesenum";



// UserCreation
/** 
 * User creation
**/
export class UserCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: FlatLocalesEnum;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
