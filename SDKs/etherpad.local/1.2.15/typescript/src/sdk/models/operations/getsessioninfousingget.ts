import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSessionInfoUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionID?: string;
}


export class GetSessionInfoUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorID?: string;

  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupID?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class GetSessionInfoUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: GetSessionInfoUsingGet200ApplicationJsonDataInfo;
}


export class GetSessionInfoUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetSessionInfoUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSessionInfoUsingGetQueryParams;
}


export class GetSessionInfoUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSessionInfoUsingGET200ApplicationJSONObject?: GetSessionInfoUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getSessionInfoUsingGET400ApplicationJSONObject?: GetSessionInfoUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getSessionInfoUsingGET401ApplicationJSONObject?: GetSessionInfoUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getSessionInfoUsingGET500ApplicationJSONObject?: GetSessionInfoUsingGet500ApplicationJson;
}
