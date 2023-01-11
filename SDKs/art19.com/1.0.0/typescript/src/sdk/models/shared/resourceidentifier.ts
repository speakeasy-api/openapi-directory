import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResourceIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
