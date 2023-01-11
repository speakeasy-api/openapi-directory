import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PadUsersCountUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class PadUsersCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padUsersCount" })
  padUsersCount?: number;
}


export class PadUsersCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PadUsersCountUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PadUsersCountUsingGetQueryParams;
}


export class PadUsersCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  padUsersCountUsingGET200ApplicationJSONObject?: PadUsersCountUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingGET400ApplicationJSONObject?: PadUsersCountUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingGET401ApplicationJSONObject?: PadUsersCountUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingGET500ApplicationJSONObject?: PadUsersCountUsingGet500ApplicationJson;
}
