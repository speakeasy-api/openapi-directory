import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";



// EngineDefaults
/** 
 *  Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.
**/
export class EngineDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ParametersList })
  parameters?: ParametersList[];
}
