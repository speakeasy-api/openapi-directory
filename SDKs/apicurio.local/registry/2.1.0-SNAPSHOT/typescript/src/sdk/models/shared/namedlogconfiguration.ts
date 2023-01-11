import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



export class NamedLogConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
