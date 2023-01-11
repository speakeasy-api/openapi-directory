import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHtmlUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetHtmlUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;
}


export class GetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetHtmlUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHtmlUsingGetQueryParams;
}


export class GetHtmlUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getHTMLUsingGET200ApplicationJSONObject?: GetHtmlUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getHTMLUsingGET400ApplicationJSONObject?: GetHtmlUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getHTMLUsingGET401ApplicationJSONObject?: GetHtmlUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getHTMLUsingGET500ApplicationJSONObject?: GetHtmlUsingGet500ApplicationJson;
}
