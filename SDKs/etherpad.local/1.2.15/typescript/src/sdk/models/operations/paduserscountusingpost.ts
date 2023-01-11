import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PadUsersCountUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class PadUsersCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padUsersCount" })
  padUsersCount?: number;
}


export class PadUsersCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PadUsersCountUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PadUsersCountUsingPostQueryParams;
}


export class PadUsersCountUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  padUsersCountUsingPOST200ApplicationJSONObject?: PadUsersCountUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingPOST400ApplicationJSONObject?: PadUsersCountUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingPOST401ApplicationJSONObject?: PadUsersCountUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingPOST500ApplicationJSONObject?: PadUsersCountUsingPost500ApplicationJson;
}
