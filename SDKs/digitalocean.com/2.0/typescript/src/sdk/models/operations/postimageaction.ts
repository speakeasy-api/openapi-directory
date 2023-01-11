import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostImageActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}

export enum PostImageActionRequestBody1TypeEnum {
    Convert = "convert",
    Transfer = "transfer"
}


export class PostImageActionRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostImageActionRequestBody1TypeEnum;
}

export enum PostImageActionRequestBody2TypeEnum {
    Convert = "convert",
    Transfer = "transfer"
}


export class PostImageActionRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostImageActionRequestBody2TypeEnum;
}


export class PostImageAction401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostImageActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostImageActionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostImageActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postImageAction401ApplicationJSONObject?: PostImageAction401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
}
