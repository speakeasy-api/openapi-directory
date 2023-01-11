import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParametersList } from "./cachenodetypespecificparameterslist";
import { ParametersList } from "./parameterslist";



// EngineDefaults
/** 
 * Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
**/
export class EngineDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheNodeTypeSpecificParametersList })
  cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList[];

  @SpeakeasyMetadata()
  cacheParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ParametersList })
  parameters?: ParametersList[];
}
