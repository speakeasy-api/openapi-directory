import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVolumeActionByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum PostVolumeActionByNameRequestBody1TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}


export class PostVolumeActionByNameRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostVolumeActionByNameRequestBody1TypeEnum;
}

export enum PostVolumeActionByNameRequestBody2TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}


export class PostVolumeActionByNameRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostVolumeActionByNameRequestBody2TypeEnum;
}


export class PostVolumeActionByName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostVolumeActionByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostVolumeActionByNameQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostVolumeActionByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postVolumeActionByName202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  postVolumeActionByName401ApplicationJSONObject?: PostVolumeActionByName401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
