import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiCredential
/** 
 * Your api credential
**/
export class ApiCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primaryToken" })
  primaryToken?: string;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryToken" })
  secondaryToken?: string;
}
