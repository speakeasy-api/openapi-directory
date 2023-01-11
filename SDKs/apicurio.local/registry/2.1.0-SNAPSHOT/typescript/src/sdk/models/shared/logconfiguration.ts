import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



export class LogConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level: LogLevelEnum;
}
