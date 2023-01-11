import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Feature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geometry" })
  geometry?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
