import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCdnEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cdn_id" })
  cdnId: string;
}


export class UpdateCdnEndpointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class UpdateCdnEndpoint401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateCdnEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCdnEndpointPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateCdnEndpointRequestBody;
}


export class UpdateCdnEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCdnEndpoint202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateCdnEndpoint401ApplicationJSONObject?: UpdateCdnEndpoint401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
