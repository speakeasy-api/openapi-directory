import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sectors" })
  sectors: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
