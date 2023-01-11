import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListGarbageCollectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class ListGarbageCollectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListGarbageCollections200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=garbage_collections", elemType: shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection })
  garbageCollections?: shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection[];
}


export class ListGarbageCollections401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListGarbageCollectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListGarbageCollectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListGarbageCollectionsQueryParams;
}


export class ListGarbageCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listGarbageCollections200ApplicationJSONObject?: ListGarbageCollections200ApplicationJson;

  @SpeakeasyMetadata()
  listGarbageCollections401ApplicationJSONObject?: ListGarbageCollections401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
