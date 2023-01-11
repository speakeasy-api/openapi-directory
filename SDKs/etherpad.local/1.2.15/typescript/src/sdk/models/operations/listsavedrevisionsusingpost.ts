import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSavedRevisionsUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class ListSavedRevisionsUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSavedRevisionsUsingPostQueryParams;
}


export class ListSavedRevisionsUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPOST200ApplicationJSONObject?: ListSavedRevisionsUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPOST400ApplicationJSONObject?: ListSavedRevisionsUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPOST401ApplicationJSONObject?: ListSavedRevisionsUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPOST500ApplicationJSONObject?: ListSavedRevisionsUsingPost500ApplicationJson;
}
