import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAuthorIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorMapper" })
  authorMapper?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorID?: string;
}


export class CreateAuthorIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateAuthorIfNotExistsForUsingPostQueryParams;
}


export class CreateAuthorIfNotExistsForUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingPOST200ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingPOST400ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingPOST401ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorIfNotExistsForUsingPOST500ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost500ApplicationJson;
}
