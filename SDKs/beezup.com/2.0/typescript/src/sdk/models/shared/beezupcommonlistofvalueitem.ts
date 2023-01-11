import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BeezUpCommonListOfValueItem
/** 
 * This object is used by LOV apis
**/
export class BeezUpCommonListOfValueItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codeIdentifier" })
  codeIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=intIdentifier" })
  intIdentifier: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=translationText" })
  translationText?: string;
}
