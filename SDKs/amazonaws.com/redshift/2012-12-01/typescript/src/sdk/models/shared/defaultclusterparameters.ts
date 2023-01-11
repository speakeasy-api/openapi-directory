import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";



// DefaultClusterParameters
/** 
 * Describes the default cluster parameters for a parameter group family.
**/
export class DefaultClusterParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata()
  parameterGroupFamily?: string;

  @SpeakeasyMetadata({ elemType: ParametersList })
  parameters?: ParametersList[];
}
