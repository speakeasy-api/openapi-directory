import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ModelId" })
  modelId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Schema" })
  schema?: Record<string, any>;
}
