import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParametersList } from "./cachenodetypespecificparameterslist";
import { ParametersList } from "./parameterslist";



// CacheParameterGroupDetails
/** 
 * Represents the output of a <code>DescribeCacheParameters</code> operation.
**/
export class CacheParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheNodeTypeSpecificParametersList })
  cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList[];

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ParametersList })
  parameters?: ParametersList[];
}
