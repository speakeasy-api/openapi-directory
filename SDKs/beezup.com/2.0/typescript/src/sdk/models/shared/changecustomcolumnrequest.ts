import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangeCustomColumnRequest
/** 
 * The message request to change a custom column expression an user name
**/
export class ChangeCustomColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedBlocklyExpression" })
  encryptedBlocklyExpression: string;

  @SpeakeasyMetadata({ data: "json, name=encryptedExpression" })
  encryptedExpression: string;

  @SpeakeasyMetadata({ data: "json, name=userColumName" })
  userColumName: string;
}
