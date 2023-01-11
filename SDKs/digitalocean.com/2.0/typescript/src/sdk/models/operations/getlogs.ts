import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=component_name" })
  componentName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: string;
}


export class GetLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=follow" })
  follow?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pod_connection_timeout" })
  podConnectionTimeout?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetParameters0Enum;
}


export class GetLogs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=historic_urls" })
  historicUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=live_url" })
  liveUrl?: string;
}


export class GetLogs401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLogsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLogsQueryParams;
}


export class GetLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLogs200ApplicationJSONObject?: GetLogs200ApplicationJson;

  @SpeakeasyMetadata()
  getLogs401ApplicationJSONObject?: GetLogs401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
