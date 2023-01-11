import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAuthorNameUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorID?: string;
}


export class GetAuthorNameUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorId" })
  colorId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class GetAuthorNameUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: GetAuthorNameUsingGet200ApplicationJsonDataInfo;
}


export class GetAuthorNameUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetAuthorNameUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAuthorNameUsingGetQueryParams;
}


export class GetAuthorNameUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAuthorNameUsingGET200ApplicationJSONObject?: GetAuthorNameUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getAuthorNameUsingGET400ApplicationJSONObject?: GetAuthorNameUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getAuthorNameUsingGET401ApplicationJSONObject?: GetAuthorNameUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getAuthorNameUsingGET500ApplicationJSONObject?: GetAuthorNameUsingGet500ApplicationJson;
}
