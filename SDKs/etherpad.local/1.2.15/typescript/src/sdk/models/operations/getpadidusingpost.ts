import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPadIdUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roID" })
  roID?: string;
}


export class GetPadIdUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPadIdUsingPostQueryParams;
}


export class GetPadIdUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPadIDUsingPOST200ApplicationJSONObject?: GetPadIdUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getPadIDUsingPOST400ApplicationJSONObject?: GetPadIdUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getPadIDUsingPOST401ApplicationJSONObject?: GetPadIdUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getPadIDUsingPOST500ApplicationJSONObject?: GetPadIdUsingPost500ApplicationJson;
}
