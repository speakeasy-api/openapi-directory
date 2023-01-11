import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SaveRevisionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class SaveRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SaveRevisionUsingPostQueryParams;
}


export class SaveRevisionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  saveRevisionUsingPOST200ApplicationJSONObject?: SaveRevisionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingPOST400ApplicationJSONObject?: SaveRevisionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingPOST401ApplicationJSONObject?: SaveRevisionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingPOST500ApplicationJSONObject?: SaveRevisionUsingPost500ApplicationJson;
}
