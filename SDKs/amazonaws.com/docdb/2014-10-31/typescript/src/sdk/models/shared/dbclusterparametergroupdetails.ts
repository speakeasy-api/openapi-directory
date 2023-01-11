import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";



// DbClusterParameterGroupDetails
/** 
 * Represents the output of <a>DBClusterParameterGroup</a>.
**/
export class DbClusterParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ParametersList })
  parameters?: ParametersList[];
}
