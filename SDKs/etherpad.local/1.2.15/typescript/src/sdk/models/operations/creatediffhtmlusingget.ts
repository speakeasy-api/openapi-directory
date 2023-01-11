import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDiffHtmlUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endRev" })
  endRev?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startRev" })
  startRev?: string;
}


export class CreateDiffHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateDiffHtmlUsingGetQueryParams;
}


export class CreateDiffHtmlUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDiffHTMLUsingGET200ApplicationJSONObject?: CreateDiffHtmlUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHTMLUsingGET400ApplicationJSONObject?: CreateDiffHtmlUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHTMLUsingGET401ApplicationJSONObject?: CreateDiffHtmlUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHTMLUsingGET500ApplicationJSONObject?: CreateDiffHtmlUsingGet500ApplicationJson;
}
