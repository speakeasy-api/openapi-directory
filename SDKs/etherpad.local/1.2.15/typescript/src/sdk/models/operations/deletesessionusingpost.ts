import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSessionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionID?: string;
}


export class DeleteSessionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteSessionUsingPostQueryParams;
}


export class DeleteSessionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteSessionUsingPOST200ApplicationJSONObject?: DeleteSessionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingPOST400ApplicationJSONObject?: DeleteSessionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingPOST401ApplicationJSONObject?: DeleteSessionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingPOST500ApplicationJSONObject?: DeleteSessionUsingPost500ApplicationJson;
}
