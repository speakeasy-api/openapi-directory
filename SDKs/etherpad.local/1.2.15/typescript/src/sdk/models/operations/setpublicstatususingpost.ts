import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publicStatus" })
  publicStatus?: string;
}


export class SetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetPublicStatusUsingPostQueryParams;
}


export class SetPublicStatusUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setPublicStatusUsingPOST200ApplicationJSONObject?: SetPublicStatusUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingPOST400ApplicationJSONObject?: SetPublicStatusUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingPOST401ApplicationJSONObject?: SetPublicStatusUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingPOST500ApplicationJSONObject?: SetPublicStatusUsingPost500ApplicationJson;
}
