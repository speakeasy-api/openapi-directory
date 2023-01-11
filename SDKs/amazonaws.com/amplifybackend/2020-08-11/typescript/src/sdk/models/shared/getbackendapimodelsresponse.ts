import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBackendApiModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Models" })
  models?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: Record<string, any>;
}
