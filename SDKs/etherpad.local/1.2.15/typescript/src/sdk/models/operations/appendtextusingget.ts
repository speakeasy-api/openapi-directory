import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppendTextUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class AppendTextUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppendTextUsingGetQueryParams;
}


export class AppendTextUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appendTextUsingGET200ApplicationJSONObject?: AppendTextUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  appendTextUsingGET400ApplicationJSONObject?: AppendTextUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  appendTextUsingGET401ApplicationJSONObject?: AppendTextUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  appendTextUsingGET500ApplicationJSONObject?: AppendTextUsingGet500ApplicationJson;
}
