import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangeCustomColumnExpressionRequest
/** 
 * The request message to change the custom column expression
**/
export class ChangeCustomColumnExpressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedBlocklyExpression" })
  encryptedBlocklyExpression: string;

  @SpeakeasyMetadata({ data: "json, name=encryptedExpression" })
  encryptedExpression: string;
}
