import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildShard } from "./childshard";
import { RecordT } from "./record";



// GetRecordsOutput
/** 
 * Represents the output for <a>GetRecords</a>.
**/
export class GetRecordsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChildShards", elemType: ChildShard })
  childShards?: ChildShard[];

  @SpeakeasyMetadata({ data: "json, name=MillisBehindLatest" })
  millisBehindLatest?: number;

  @SpeakeasyMetadata({ data: "json, name=NextShardIterator" })
  nextShardIterator?: string;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: RecordT })
  records: RecordT[];
}
