import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApiMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiId" })
  apiId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiMappingId" })
  apiMappingId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiMappingKey" })
  apiMappingKey?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Stage" })
  stage?: Record<string, any>;
}
