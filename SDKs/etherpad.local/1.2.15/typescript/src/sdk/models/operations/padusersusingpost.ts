import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PadUsersUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class PadUsersUsingPost200ApplicationJsonDataPadUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorId" })
  colorId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class PadUsersUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padUsers", elemType: PadUsersUsingPost200ApplicationJsonDataPadUsers })
  padUsers?: PadUsersUsingPost200ApplicationJsonDataPadUsers[];
}


export class PadUsersUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PadUsersUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PadUsersUsingPostQueryParams;
}


export class PadUsersUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  padUsersUsingPOST200ApplicationJSONObject?: PadUsersUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  padUsersUsingPOST400ApplicationJSONObject?: PadUsersUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  padUsersUsingPOST401ApplicationJSONObject?: PadUsersUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  padUsersUsingPOST500ApplicationJSONObject?: PadUsersUsingPost500ApplicationJson;
}
