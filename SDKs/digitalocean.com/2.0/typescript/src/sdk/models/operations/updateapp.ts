import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateAppRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}


export class UpdateApp401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAppPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAppRequestBody;
}


export class UpdateAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateApp401ApplicationJSONObject?: UpdateApp401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  onev21appsPostResponses200ContentApplication1jsonSchema?: shared.Onev21appsPostResponses200ContentApplication1jsonSchema;
}
