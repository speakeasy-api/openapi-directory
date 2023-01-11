import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";



// ClusterParameterGroupDetails
/** 
 * Contains the output from the <a>DescribeClusterParameters</a> action. 
**/
export class ClusterParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ParametersList })
  parameters?: ParametersList[];
}
