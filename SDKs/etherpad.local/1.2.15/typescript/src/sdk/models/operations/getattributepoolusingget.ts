import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAttributePoolUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class GetAttributePoolUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAttributePoolUsingGetQueryParams;
}


export class GetAttributePoolUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAttributePoolUsingGET200ApplicationJSONObject?: GetAttributePoolUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getAttributePoolUsingGET400ApplicationJSONObject?: GetAttributePoolUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getAttributePoolUsingGET401ApplicationJSONObject?: GetAttributePoolUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getAttributePoolUsingGET500ApplicationJSONObject?: GetAttributePoolUsingGet500ApplicationJson;
}
