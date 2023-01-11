import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChatHistoryUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetChatHistoryUsingGet200ApplicationJsonDataMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHistoryUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GetChatHistoryUsingGet200ApplicationJsonDataMessages })
  messages?: GetChatHistoryUsingGet200ApplicationJsonDataMessages[];
}


export class GetChatHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetChatHistoryUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChatHistoryUsingGetQueryParams;
}


export class GetChatHistoryUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChatHistoryUsingGET200ApplicationJSONObject?: GetChatHistoryUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getChatHistoryUsingGET400ApplicationJSONObject?: GetChatHistoryUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getChatHistoryUsingGET401ApplicationJSONObject?: GetChatHistoryUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getChatHistoryUsingGET500ApplicationJSONObject?: GetChatHistoryUsingGet500ApplicationJson;
}
