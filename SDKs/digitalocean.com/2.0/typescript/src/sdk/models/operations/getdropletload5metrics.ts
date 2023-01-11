import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDropletLoad5MetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletLoad5Metrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletLoad5Metrics200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetDropletLoad5Metrics200ApplicationJsonDataResult })
  result: GetDropletLoad5Metrics200ApplicationJsonDataResult[];

  @SpeakeasyMetadata({ data: "json, name=resultType" })
  resultType: GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletLoad5Metrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}


export class GetDropletLoad5Metrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetDropletLoad5Metrics200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetDropletLoad5Metrics200ApplicationJsonStatusEnum;
}


export class GetDropletLoad5Metrics401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletLoad5MetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDropletLoad5MetricsQueryParams;
}


export class GetDropletLoad5MetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDropletLoad5Metrics200ApplicationJSONObject?: GetDropletLoad5Metrics200ApplicationJson;

  @SpeakeasyMetadata()
  getDropletLoad5Metrics401ApplicationJSONObject?: GetDropletLoad5Metrics401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
