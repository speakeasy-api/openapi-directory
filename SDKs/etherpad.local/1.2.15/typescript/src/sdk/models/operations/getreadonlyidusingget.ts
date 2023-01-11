import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReadOnlyIdUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetReadOnlyIdUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readOnlyID" })
  readOnlyID?: string;
}


export class GetReadOnlyIdUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetReadOnlyIdUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReadOnlyIdUsingGetQueryParams;
}


export class GetReadOnlyIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getReadOnlyIDUsingGET200ApplicationJSONObject?: GetReadOnlyIdUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIDUsingGET400ApplicationJSONObject?: GetReadOnlyIdUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIDUsingGET401ApplicationJSONObject?: GetReadOnlyIdUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIDUsingGET500ApplicationJSONObject?: GetReadOnlyIdUsingGet500ApplicationJson;
}
