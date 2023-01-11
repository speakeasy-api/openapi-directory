import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListOfValueItem
/** 
 * This object is used by LOV apis
**/
export class ListOfValueItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codeIdentifier" })
  codeIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=intIdentifier" })
  intIdentifier: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=translationText" })
  translationText?: string;
}
