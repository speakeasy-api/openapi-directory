import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendClientsMessageUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class SendClientsMessageUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SendClientsMessageUsingGetQueryParams;
}


export class SendClientsMessageUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendClientsMessageUsingGET200ApplicationJSONObject?: SendClientsMessageUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingGET400ApplicationJSONObject?: SendClientsMessageUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingGET401ApplicationJSONObject?: SendClientsMessageUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingGET500ApplicationJSONObject?: SendClientsMessageUsingGet500ApplicationJson;
}
