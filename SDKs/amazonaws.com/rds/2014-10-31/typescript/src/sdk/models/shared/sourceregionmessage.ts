import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceRegionList } from "./sourceregionlist";



// SourceRegionMessage
/** 
 * Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
**/
export class SourceRegionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SourceRegionList })
  sourceRegions?: SourceRegionList[];
}
