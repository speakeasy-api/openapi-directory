import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetHtmlUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class SetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetHtmlUsingGetQueryParams;
}


export class SetHtmlUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setHTMLUsingGET200ApplicationJSONObject?: SetHtmlUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  setHTMLUsingGET400ApplicationJSONObject?: SetHtmlUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  setHTMLUsingGET401ApplicationJSONObject?: SetHtmlUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  setHTMLUsingGET500ApplicationJSONObject?: SetHtmlUsingGet500ApplicationJson;
}
