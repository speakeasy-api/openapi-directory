import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheEngineVersionList
/** 
 * Provides all of the details about a particular cache engine version.
**/
export class CacheEngineVersionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheEngineDescription?: string;

  @SpeakeasyMetadata()
  cacheEngineVersionDescription?: string;

  @SpeakeasyMetadata()
  cacheParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;
}
