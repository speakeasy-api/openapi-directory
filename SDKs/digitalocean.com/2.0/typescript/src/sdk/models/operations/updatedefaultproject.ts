import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateDefaultProjectRequestBodyEnvironmentEnum {
    Development = "Development",
    Staging = "Staging",
    Production = "Production"
}


export class UpdateDefaultProjectRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: UpdateDefaultProjectRequestBodyEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=is_default" })
  isDefault: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: string;
}


export class UpdateDefaultProject401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDefaultProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDefaultProjectRequestBodyInput;
}


export class UpdateDefaultProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDefaultProject200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateDefaultProject401ApplicationJSONObject?: UpdateDefaultProject401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
