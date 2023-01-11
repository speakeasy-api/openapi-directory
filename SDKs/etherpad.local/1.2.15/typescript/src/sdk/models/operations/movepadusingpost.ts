import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovePadUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceID?: string;
}


export class MovePadUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MovePadUsingPostQueryParams;
}


export class MovePadUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  movePadUsingPOST200ApplicationJSONObject?: MovePadUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingPOST400ApplicationJSONObject?: MovePadUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingPOST401ApplicationJSONObject?: MovePadUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingPOST500ApplicationJSONObject?: MovePadUsingPost500ApplicationJson;
}
