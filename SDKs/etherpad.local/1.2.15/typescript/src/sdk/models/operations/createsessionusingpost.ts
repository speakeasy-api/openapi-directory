import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSessionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validUntil" })
  validUntil?: string;
}


export class CreateSessionUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionID" })
  sessionID?: string;
}


export class CreateSessionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateSessionUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateSessionUsingPostQueryParams;
}


export class CreateSessionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSessionUsingPOST200ApplicationJSONObject?: CreateSessionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingPOST400ApplicationJSONObject?: CreateSessionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingPOST401ApplicationJSONObject?: CreateSessionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingPOST500ApplicationJSONObject?: CreateSessionUsingPost500ApplicationJson;
}
