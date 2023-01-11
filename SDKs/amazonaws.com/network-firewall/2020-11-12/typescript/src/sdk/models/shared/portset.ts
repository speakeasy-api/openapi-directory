import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PortSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: string[];
}
