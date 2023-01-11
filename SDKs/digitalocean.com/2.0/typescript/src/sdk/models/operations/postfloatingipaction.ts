import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFloatingIpActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=floating_ip" })
  floatingIp: string;
}

export enum PostFloatingIpActionRequestBody1TypeEnum {
    Assign = "assign",
    Unassign = "unassign"
}


export class PostFloatingIpActionRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostFloatingIpActionRequestBody1TypeEnum;
}

export enum PostFloatingIpActionRequestBody2TypeEnum {
    Assign = "assign",
    Unassign = "unassign"
}


export class PostFloatingIpActionRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostFloatingIpActionRequestBody2TypeEnum;
}


export class PostFloatingIpAction401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostFloatingIpActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFloatingIpActionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostFloatingIpActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postFloatingIpAction201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  postFloatingIpAction401ApplicationJSONObject?: PostFloatingIpAction401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
