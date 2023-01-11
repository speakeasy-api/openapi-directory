import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export enum UpdateProjectRequestBodyEnvironmentEnum {
    Development = "Development",
    Staging = "Staging",
    Production = "Production"
}


export class UpdateProjectRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: UpdateProjectRequestBodyEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=is_default" })
  isDefault: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: string;
}


export class UpdateProject401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProjectPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBodyInput;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateProject200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateProject401ApplicationJSONObject?: UpdateProject401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
