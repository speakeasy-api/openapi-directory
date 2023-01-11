import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovePadUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceID?: string;
}


export class MovePadUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MovePadUsingGetQueryParams;
}


export class MovePadUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  movePadUsingGET200ApplicationJSONObject?: MovePadUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingGET400ApplicationJSONObject?: MovePadUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingGET401ApplicationJSONObject?: MovePadUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingGET500ApplicationJSONObject?: MovePadUsingGet500ApplicationJson;
}
