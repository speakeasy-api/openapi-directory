import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPadIdUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roID" })
  roID?: string;
}


export class GetPadIdUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPadIdUsingGetQueryParams;
}


export class GetPadIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPadIDUsingGET200ApplicationJSONObject?: GetPadIdUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getPadIDUsingGET400ApplicationJSONObject?: GetPadIdUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getPadIDUsingGET401ApplicationJSONObject?: GetPadIdUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getPadIDUsingGET500ApplicationJSONObject?: GetPadIdUsingGet500ApplicationJson;
}
