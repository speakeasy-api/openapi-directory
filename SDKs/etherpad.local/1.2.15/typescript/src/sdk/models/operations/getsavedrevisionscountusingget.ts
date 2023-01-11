import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSavedRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetSavedRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSavedRevisionsCountUsingGetQueryParams;
}


export class GetSavedRevisionsCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGET200ApplicationJSONObject?: GetSavedRevisionsCountUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGET400ApplicationJSONObject?: GetSavedRevisionsCountUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGET401ApplicationJSONObject?: GetSavedRevisionsCountUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGET500ApplicationJSONObject?: GetSavedRevisionsCountUsingGet500ApplicationJson;
}
