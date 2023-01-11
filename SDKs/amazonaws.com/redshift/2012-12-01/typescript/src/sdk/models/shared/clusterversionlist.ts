import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterVersionList
/** 
 * Describes a cluster version, including the parameter group family and description of the version.
**/
export class ClusterVersionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  description?: string;
}
