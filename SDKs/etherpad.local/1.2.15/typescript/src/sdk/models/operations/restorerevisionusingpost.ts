import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreRevisionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class RestoreRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RestoreRevisionUsingPostQueryParams;
}


export class RestoreRevisionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  restoreRevisionUsingPOST200ApplicationJSONObject?: RestoreRevisionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingPOST400ApplicationJSONObject?: RestoreRevisionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingPOST401ApplicationJSONObject?: RestoreRevisionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingPOST500ApplicationJSONObject?: RestoreRevisionUsingPost500ApplicationJson;
}
