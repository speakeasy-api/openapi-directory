import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyPadUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceID?: string;
}


export class CopyPadUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CopyPadUsingGetQueryParams;
}


export class CopyPadUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyPadUsingGET200ApplicationJSONObject?: CopyPadUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingGET400ApplicationJSONObject?: CopyPadUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingGET401ApplicationJSONObject?: CopyPadUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingGET500ApplicationJSONObject?: CopyPadUsingGet500ApplicationJson;
}
