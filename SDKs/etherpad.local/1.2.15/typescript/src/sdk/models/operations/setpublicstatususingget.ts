import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publicStatus" })
  publicStatus?: string;
}


export class SetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetPublicStatusUsingGetQueryParams;
}


export class SetPublicStatusUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setPublicStatusUsingGET200ApplicationJSONObject?: SetPublicStatusUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingGET400ApplicationJSONObject?: SetPublicStatusUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingGET401ApplicationJSONObject?: SetPublicStatusUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingGET500ApplicationJSONObject?: SetPublicStatusUsingGet500ApplicationJson;
}
