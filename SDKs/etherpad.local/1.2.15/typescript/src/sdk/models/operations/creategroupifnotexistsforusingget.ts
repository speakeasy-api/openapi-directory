import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGroupIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMapper" })
  groupMapper?: string;
}


export class CreateGroupIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupID?: string;
}


export class CreateGroupIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateGroupIfNotExistsForUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateGroupIfNotExistsForUsingGetQueryParams;
}


export class CreateGroupIfNotExistsForUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGET200ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGET400ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGET401ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGET500ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet500ApplicationJson;
}
