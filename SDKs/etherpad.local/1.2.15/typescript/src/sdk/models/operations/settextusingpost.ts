import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetTextUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class SetTextUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetTextUsingPostQueryParams;
}


export class SetTextUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setTextUsingPOST200ApplicationJSONObject?: SetTextUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  setTextUsingPOST400ApplicationJSONObject?: SetTextUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  setTextUsingPOST401ApplicationJSONObject?: SetTextUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  setTextUsingPOST500ApplicationJSONObject?: SetTextUsingPost500ApplicationJson;
}
