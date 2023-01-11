import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeExpressionRequest
/** 
 * The request message to compute an expression based on the provided product values
**/
export class ComputeExpressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedExpression" })
  encryptedExpression: string;

  @SpeakeasyMetadata({ data: "json, name=productValues" })
  productValues: Record<string, string>;
}
