import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDropletMemoryTotalMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletMemoryTotalMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletMemoryTotalMetrics200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetDropletMemoryTotalMetrics200ApplicationJsonDataResult })
  result: GetDropletMemoryTotalMetrics200ApplicationJsonDataResult[];

  @SpeakeasyMetadata({ data: "json, name=resultType" })
  resultType: GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}


export class GetDropletMemoryTotalMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetDropletMemoryTotalMetrics200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletMemoryTotalMetrics401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletMemoryTotalMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDropletMemoryTotalMetricsQueryParams;
}


export class GetDropletMemoryTotalMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDropletMemoryTotalMetrics200ApplicationJSONObject?: GetDropletMemoryTotalMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  getDropletMemoryTotalMetrics401ApplicationJSONObject?: GetDropletMemoryTotalMetrics401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
