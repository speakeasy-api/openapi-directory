import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheEngineVersionList } from "./cacheengineversionlist";



// CacheEngineVersionMessage
/** 
 * Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
**/
export class CacheEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheEngineVersionList })
  cacheEngineVersions?: CacheEngineVersionList[];

  @SpeakeasyMetadata()
  marker?: string;
}
