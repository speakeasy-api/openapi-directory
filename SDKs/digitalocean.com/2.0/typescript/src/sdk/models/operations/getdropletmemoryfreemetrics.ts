import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDropletMemoryFreeMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletMemoryFreeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletMemoryFreeMetrics200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetDropletMemoryFreeMetrics200ApplicationJsonDataResult })
  result: GetDropletMemoryFreeMetrics200ApplicationJsonDataResult[];

  @SpeakeasyMetadata({ data: "json, name=resultType" })
  resultType: GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}


export class GetDropletMemoryFreeMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetDropletMemoryFreeMetrics200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletMemoryFreeMetrics401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletMemoryFreeMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDropletMemoryFreeMetricsQueryParams;
}


export class GetDropletMemoryFreeMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDropletMemoryFreeMetrics200ApplicationJSONObject?: GetDropletMemoryFreeMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  getDropletMemoryFreeMetrics401ApplicationJSONObject?: GetDropletMemoryFreeMetrics401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
