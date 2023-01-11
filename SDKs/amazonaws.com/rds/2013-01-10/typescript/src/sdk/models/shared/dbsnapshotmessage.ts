import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshotList } from "./dbsnapshotlist";



export class DbSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSnapshotList })
  dbSnapshots?: DbSnapshotList[];

  @SpeakeasyMetadata()
  marker?: string;
}
