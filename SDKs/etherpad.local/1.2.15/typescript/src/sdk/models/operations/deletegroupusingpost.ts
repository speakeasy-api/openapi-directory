import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupID?: string;
}


export class DeleteGroupUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteGroupUsingPostQueryParams;
}


export class DeleteGroupUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteGroupUsingPOST200ApplicationJSONObject?: DeleteGroupUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingPOST400ApplicationJSONObject?: DeleteGroupUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingPOST401ApplicationJSONObject?: DeleteGroupUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingPOST500ApplicationJSONObject?: DeleteGroupUsingPost500ApplicationJson;
}
