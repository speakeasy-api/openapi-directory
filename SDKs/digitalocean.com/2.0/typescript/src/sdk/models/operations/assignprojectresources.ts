import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignProjectResourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class AssignProjectResourcesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];
}


export class AssignProjectResources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resources", elemType: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems })
  resources?: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems[];
}


export class AssignProjectResources401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AssignProjectResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignProjectResourcesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssignProjectResourcesRequestBody;
}


export class AssignProjectResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignProjectResources200ApplicationJSONObject?: AssignProjectResources200ApplicationJson;

  @SpeakeasyMetadata()
  assignProjectResources401ApplicationJSONObject?: AssignProjectResources401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
