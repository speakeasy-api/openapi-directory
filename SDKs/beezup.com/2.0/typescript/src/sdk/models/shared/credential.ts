import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Credential
/** 
 * Provides the credentials
**/
export class Credential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;
}
