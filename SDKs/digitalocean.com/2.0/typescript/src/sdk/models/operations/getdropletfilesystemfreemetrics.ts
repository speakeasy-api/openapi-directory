import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDropletFilesystemFreeMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletFilesystemFreeMetrics200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult })
  result: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult[];

  @SpeakeasyMetadata({ data: "json, name=resultType" })
  resultType: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}


export class GetDropletFilesystemFreeMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetDropletFilesystemFreeMetrics200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletFilesystemFreeMetrics401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletFilesystemFreeMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDropletFilesystemFreeMetricsQueryParams;
}


export class GetDropletFilesystemFreeMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDropletFilesystemFreeMetrics200ApplicationJSONObject?: GetDropletFilesystemFreeMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  getDropletFilesystemFreeMetrics401ApplicationJSONObject?: GetDropletFilesystemFreeMetrics401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
