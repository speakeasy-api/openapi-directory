import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyPadWithoutHistoryUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceID?: string;
}


export class CopyPadWithoutHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CopyPadWithoutHistoryUsingGetQueryParams;
}


export class CopyPadWithoutHistoryUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGET200ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGET400ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGET401ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGET500ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet500ApplicationJson;
}
