import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendClientsMessageUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;
}


export class SendClientsMessageUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SendClientsMessageUsingPostQueryParams;
}


export class SendClientsMessageUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPOST200ApplicationJSONObject?: SendClientsMessageUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPOST400ApplicationJSONObject?: SendClientsMessageUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPOST401ApplicationJSONObject?: SendClientsMessageUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPOST500ApplicationJSONObject?: SendClientsMessageUsingPost500ApplicationJson;
}
