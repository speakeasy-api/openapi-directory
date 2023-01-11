import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVolumeActionByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volume_id" })
  volumeId: string;
}


export class PostVolumeActionByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum PostVolumeActionByIdRequestBody3TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}


export class PostVolumeActionByIdRequestBody3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostVolumeActionByIdRequestBody3TypeEnum;
}


export class PostVolumeActionById401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostVolumeActionByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVolumeActionByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostVolumeActionByIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostVolumeActionByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postVolumeActionById202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  postVolumeActionById401ApplicationJSONObject?: PostVolumeActionById401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
