import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreRevisionUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class RestoreRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RestoreRevisionUsingGetQueryParams;
}


export class RestoreRevisionUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  restoreRevisionUsingGET200ApplicationJSONObject?: RestoreRevisionUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingGET400ApplicationJSONObject?: RestoreRevisionUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingGET401ApplicationJSONObject?: RestoreRevisionUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingGET500ApplicationJSONObject?: RestoreRevisionUsingGet500ApplicationJson;
}
