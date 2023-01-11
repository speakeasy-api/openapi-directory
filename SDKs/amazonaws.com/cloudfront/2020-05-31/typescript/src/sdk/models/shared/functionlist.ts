import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummaryList } from "./functionsummarylist";



// FunctionList
/** 
 * A list of CloudFront functions.
**/
export class FunctionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FunctionSummaryList })
  items?: FunctionSummaryList[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
