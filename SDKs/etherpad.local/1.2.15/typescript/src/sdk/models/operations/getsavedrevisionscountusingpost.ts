import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSavedRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetSavedRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSavedRevisionsCountUsingPostQueryParams;
}


export class GetSavedRevisionsCountUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPOST200ApplicationJSONObject?: GetSavedRevisionsCountUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPOST400ApplicationJSONObject?: GetSavedRevisionsCountUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPOST401ApplicationJSONObject?: GetSavedRevisionsCountUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPOST500ApplicationJSONObject?: GetSavedRevisionsCountUsingPost500ApplicationJson;
}
