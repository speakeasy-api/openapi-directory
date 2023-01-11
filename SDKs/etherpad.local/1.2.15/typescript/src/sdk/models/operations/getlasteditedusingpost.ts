import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLastEditedUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetLastEditedUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastEdited" })
  lastEdited?: number;
}


export class GetLastEditedUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLastEditedUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLastEditedUsingPostQueryParams;
}


export class GetLastEditedUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLastEditedUsingPOST200ApplicationJSONObject?: GetLastEditedUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingPOST400ApplicationJSONObject?: GetLastEditedUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingPOST401ApplicationJSONObject?: GetLastEditedUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingPOST500ApplicationJSONObject?: GetLastEditedUsingPost500ApplicationJson;
}
