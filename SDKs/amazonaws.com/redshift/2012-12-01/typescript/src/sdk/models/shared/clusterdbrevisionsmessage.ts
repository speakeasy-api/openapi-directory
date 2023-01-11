import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterDbRevisionsList } from "./clusterdbrevisionslist";



export class ClusterDbRevisionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterDbRevisionsList })
  clusterDbRevisions?: ClusterDbRevisionsList[];

  @SpeakeasyMetadata()
  marker?: string;
}
