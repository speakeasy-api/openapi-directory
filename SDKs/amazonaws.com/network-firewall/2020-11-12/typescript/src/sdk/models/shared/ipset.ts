import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: string[];
}
