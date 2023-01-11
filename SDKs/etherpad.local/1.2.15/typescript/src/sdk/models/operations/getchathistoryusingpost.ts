import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChatHistoryUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetChatHistoryUsingPost200ApplicationJsonDataMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHistoryUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GetChatHistoryUsingPost200ApplicationJsonDataMessages })
  messages?: GetChatHistoryUsingPost200ApplicationJsonDataMessages[];
}


export class GetChatHistoryUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetChatHistoryUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChatHistoryUsingPostQueryParams;
}


export class GetChatHistoryUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChatHistoryUsingPOST200ApplicationJSONObject?: GetChatHistoryUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getChatHistoryUsingPOST400ApplicationJSONObject?: GetChatHistoryUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getChatHistoryUsingPOST401ApplicationJSONObject?: GetChatHistoryUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getChatHistoryUsingPOST500ApplicationJSONObject?: GetChatHistoryUsingPost500ApplicationJson;
}
