import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetRevisionsCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revisions" })
  revisions?: number;
}


export class GetRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetRevisionsCountUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevisionsCountUsingPostQueryParams;
}


export class GetRevisionsCountUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPOST200ApplicationJSONObject?: GetRevisionsCountUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPOST400ApplicationJSONObject?: GetRevisionsCountUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPOST401ApplicationJSONObject?: GetRevisionsCountUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPOST500ApplicationJSONObject?: GetRevisionsCountUsingPost500ApplicationJson;
}
