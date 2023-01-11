import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLastEditedUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetLastEditedUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastEdited" })
  lastEdited?: number;
}


export class GetLastEditedUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLastEditedUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLastEditedUsingGetQueryParams;
}


export class GetLastEditedUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLastEditedUsingGET200ApplicationJSONObject?: GetLastEditedUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingGET400ApplicationJSONObject?: GetLastEditedUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingGET401ApplicationJSONObject?: GetLastEditedUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingGET500ApplicationJSONObject?: GetLastEditedUsingGet500ApplicationJson;
}
