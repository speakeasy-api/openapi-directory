import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHtmlUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetHtmlUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;
}


export class GetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetHtmlUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHtmlUsingPostQueryParams;
}


export class GetHtmlUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getHTMLUsingPOST200ApplicationJSONObject?: GetHtmlUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getHTMLUsingPOST400ApplicationJSONObject?: GetHtmlUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getHTMLUsingPOST401ApplicationJSONObject?: GetHtmlUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getHTMLUsingPOST500ApplicationJSONObject?: GetHtmlUsingPost500ApplicationJson;
}
