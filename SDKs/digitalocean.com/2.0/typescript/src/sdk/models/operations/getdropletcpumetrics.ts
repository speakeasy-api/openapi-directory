import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDropletCpuMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletCpuMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletCpuMetrics200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetDropletCpuMetrics200ApplicationJsonDataResult })
  result: GetDropletCpuMetrics200ApplicationJsonDataResult[];

  @SpeakeasyMetadata({ data: "json, name=resultType" })
  resultType: GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletCpuMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}


export class GetDropletCpuMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetDropletCpuMetrics200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetDropletCpuMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletCpuMetrics401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletCpuMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDropletCpuMetricsQueryParams;
}


export class GetDropletCpuMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDropletCpuMetrics200ApplicationJSONObject?: GetDropletCpuMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  getDropletCpuMetrics401ApplicationJSONObject?: GetDropletCpuMetrics401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
