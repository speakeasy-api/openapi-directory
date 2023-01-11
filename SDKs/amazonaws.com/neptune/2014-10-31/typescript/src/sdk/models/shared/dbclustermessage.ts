import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterList } from "./dbclusterlist";



export class DbClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterList })
  dbClusters?: DbClusterList[];

  @SpeakeasyMetadata()
  marker?: string;
}
