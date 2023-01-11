import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSessionsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorID?: string;
}


export class ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorID?: string;

  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupID?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions[];
}


export class ListSessionsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListSessionsOfAuthorUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSessionsOfAuthorUsingGetQueryParams;
}


export class ListSessionsOfAuthorUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingGET200ApplicationJSONObject?: ListSessionsOfAuthorUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingGET400ApplicationJSONObject?: ListSessionsOfAuthorUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingGET401ApplicationJSONObject?: ListSessionsOfAuthorUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingGET500ApplicationJSONObject?: ListSessionsOfAuthorUsingGet500ApplicationJson;
}
