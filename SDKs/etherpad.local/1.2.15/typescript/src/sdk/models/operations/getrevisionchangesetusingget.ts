import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevisionChangesetUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetRevisionChangesetUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevisionChangesetUsingGetQueryParams;
}


export class GetRevisionChangesetUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGET200ApplicationJSONObject?: GetRevisionChangesetUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGET400ApplicationJSONObject?: GetRevisionChangesetUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGET401ApplicationJSONObject?: GetRevisionChangesetUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGET500ApplicationJSONObject?: GetRevisionChangesetUsingGet500ApplicationJson;
}
