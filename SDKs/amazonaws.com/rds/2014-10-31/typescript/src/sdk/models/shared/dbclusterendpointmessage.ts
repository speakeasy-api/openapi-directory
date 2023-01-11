import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterEndpointList } from "./dbclusterendpointlist";



export class DbClusterEndpointMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterEndpointList })
  dbClusterEndpoints?: DbClusterEndpointList[];

  @SpeakeasyMetadata()
  marker?: string;
}
