import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevisionChangesetUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetRevisionChangesetUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevisionChangesetUsingPostQueryParams;
}


export class GetRevisionChangesetUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingPOST200ApplicationJSONObject?: GetRevisionChangesetUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingPOST400ApplicationJSONObject?: GetRevisionChangesetUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingPOST401ApplicationJSONObject?: GetRevisionChangesetUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingPOST500ApplicationJSONObject?: GetRevisionChangesetUsingPost500ApplicationJson;
}
