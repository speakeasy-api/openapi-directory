import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDropletBandwidthMetricsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum GetDropletBandwidthMetricsInterfaceEnum {
    Private = "private",
    Public = "public"
}


export class GetDropletBandwidthMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction: GetDropletBandwidthMetricsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interface" })
  interface: GetDropletBandwidthMetricsInterfaceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletBandwidthMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletBandwidthMetrics200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetDropletBandwidthMetrics200ApplicationJsonDataResult })
  result: GetDropletBandwidthMetrics200ApplicationJsonDataResult[];

  @SpeakeasyMetadata({ data: "json, name=resultType" })
  resultType: GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletBandwidthMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}


export class GetDropletBandwidthMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetDropletBandwidthMetrics200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetDropletBandwidthMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletBandwidthMetrics401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletBandwidthMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDropletBandwidthMetricsQueryParams;
}


export class GetDropletBandwidthMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDropletBandwidthMetrics200ApplicationJSONObject?: GetDropletBandwidthMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  getDropletBandwidthMetrics401ApplicationJSONObject?: GetDropletBandwidthMetrics401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
