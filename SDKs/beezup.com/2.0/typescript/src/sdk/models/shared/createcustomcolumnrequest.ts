import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateCustomColumnRequest
/** 
 * The request message to create a custom column
**/
export class CreateCustomColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayGroupName" })
  displayGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=encryptedBlocklyExpression" })
  encryptedBlocklyExpression: string;

  @SpeakeasyMetadata({ data: "json, name=encryptedExpression" })
  encryptedExpression: string;

  @SpeakeasyMetadata({ data: "json, name=userColumnName" })
  userColumnName: string;
}
