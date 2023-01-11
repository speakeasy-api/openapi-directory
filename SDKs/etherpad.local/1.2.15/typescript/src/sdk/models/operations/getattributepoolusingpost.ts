import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAttributePoolUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetAttributePoolUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAttributePoolUsingPostQueryParams;
}


export class GetAttributePoolUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAttributePoolUsingPOST200ApplicationJSONObject?: GetAttributePoolUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getAttributePoolUsingPOST400ApplicationJSONObject?: GetAttributePoolUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getAttributePoolUsingPOST401ApplicationJSONObject?: GetAttributePoolUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getAttributePoolUsingPOST500ApplicationJSONObject?: GetAttributePoolUsingPost500ApplicationJson;
}
