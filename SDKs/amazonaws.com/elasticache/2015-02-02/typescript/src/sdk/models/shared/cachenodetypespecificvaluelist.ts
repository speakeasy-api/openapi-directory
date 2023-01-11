import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheNodeTypeSpecificValueList
/** 
 * A value that applies only to a certain cache node type.
**/
export class CacheNodeTypeSpecificValueList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  value?: string;
}
