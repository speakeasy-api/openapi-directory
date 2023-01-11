import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSavedRevisionsUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class ListSavedRevisionsUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSavedRevisionsUsingGetQueryParams;
}


export class ListSavedRevisionsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGET200ApplicationJSONObject?: ListSavedRevisionsUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGET400ApplicationJSONObject?: ListSavedRevisionsUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGET401ApplicationJSONObject?: ListSavedRevisionsUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGET500ApplicationJSONObject?: ListSavedRevisionsUsingGet500ApplicationJson;
}
