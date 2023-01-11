import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePadUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class CreatePadUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreatePadUsingPostQueryParams;
}


export class CreatePadUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPadUsingPOST200ApplicationJSONObject?: CreatePadUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createPadUsingPOST400ApplicationJSONObject?: CreatePadUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createPadUsingPOST401ApplicationJSONObject?: CreatePadUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createPadUsingPOST500ApplicationJSONObject?: CreatePadUsingPost500ApplicationJson;
}
