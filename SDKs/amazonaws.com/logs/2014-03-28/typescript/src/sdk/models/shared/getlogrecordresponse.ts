import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLogRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logRecord" })
  logRecord?: Record<string, string>;
}
