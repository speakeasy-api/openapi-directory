import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSessionsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorID?: string;
}


export class ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorID?: string;

  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupID?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions[];
}


export class ListSessionsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListSessionsOfAuthorUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSessionsOfAuthorUsingPostQueryParams;
}


export class ListSessionsOfAuthorUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPOST200ApplicationJSONObject?: ListSessionsOfAuthorUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPOST400ApplicationJSONObject?: ListSessionsOfAuthorUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPOST401ApplicationJSONObject?: ListSessionsOfAuthorUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPOST500ApplicationJSONObject?: ListSessionsOfAuthorUsingPost500ApplicationJson;
}
