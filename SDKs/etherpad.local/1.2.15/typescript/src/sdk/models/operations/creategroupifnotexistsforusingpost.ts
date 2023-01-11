import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGroupIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMapper" })
  groupMapper?: string;
}


export class CreateGroupIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupID?: string;
}


export class CreateGroupIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateGroupIfNotExistsForUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateGroupIfNotExistsForUsingPostQueryParams;
}


export class CreateGroupIfNotExistsForUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPOST200ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPOST400ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPOST401ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPOST500ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost500ApplicationJson;
}
