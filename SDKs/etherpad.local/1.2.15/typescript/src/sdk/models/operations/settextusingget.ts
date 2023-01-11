import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetTextUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class SetTextUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetTextUsingGetQueryParams;
}


export class SetTextUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setTextUsingGET200ApplicationJSONObject?: SetTextUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  setTextUsingGET400ApplicationJSONObject?: SetTextUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  setTextUsingGET401ApplicationJSONObject?: SetTextUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  setTextUsingGET500ApplicationJSONObject?: SetTextUsingGet500ApplicationJson;
}
