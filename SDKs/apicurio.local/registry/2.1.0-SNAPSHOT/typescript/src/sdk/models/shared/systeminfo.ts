import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SystemInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtOn" })
  builtOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
