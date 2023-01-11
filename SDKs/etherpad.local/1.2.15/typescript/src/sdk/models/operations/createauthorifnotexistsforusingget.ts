import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAuthorIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorMapper" })
  authorMapper?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorID?: string;
}


export class CreateAuthorIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateAuthorIfNotExistsForUsingGetQueryParams;
}


export class CreateAuthorIfNotExistsForUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingGET200ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingGET400ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingGET401ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingGET500ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet500ApplicationJson;
}
