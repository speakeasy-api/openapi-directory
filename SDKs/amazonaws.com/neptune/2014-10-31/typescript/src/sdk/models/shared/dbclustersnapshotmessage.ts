import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotList } from "./dbclustersnapshotlist";



export class DbClusterSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshotList })
  dbClusterSnapshots?: DbClusterSnapshotList[];

  @SpeakeasyMetadata()
  marker?: string;
}
