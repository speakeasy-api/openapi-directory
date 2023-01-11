import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalClusterList } from "./globalclusterlist";



export class GlobalClustersMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GlobalClusterList })
  globalClusters?: GlobalClusterList[];

  @SpeakeasyMetadata()
  marker?: string;
}
