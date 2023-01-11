import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordT } from "./record";



export class WriteRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommonAttributes" })
  commonAttributes?: RecordT;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: RecordT })
  records: RecordT[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
