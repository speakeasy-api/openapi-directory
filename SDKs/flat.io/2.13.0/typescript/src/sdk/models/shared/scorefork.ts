import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreFork
/** 
 * Options to fork the score
**/
export class ScoreFork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;
}
