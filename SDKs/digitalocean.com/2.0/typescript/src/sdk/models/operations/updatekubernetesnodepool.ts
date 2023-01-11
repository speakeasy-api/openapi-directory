import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateKubernetesNodePoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_pool_id" })
  nodePoolId: string;
}

export enum UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum {
    NoSchedule = "NoSchedule",
    PreferNoSchedule = "PreferNoSchedule",
    NoExecute = "NoExecute"
}


export class UpdateKubernetesNodePoolRequestBodyTaints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effect" })
  effect?: UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateKubernetesNodePoolRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_scale" })
  autoScale?: boolean;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_nodes" })
  maxNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=min_nodes" })
  minNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=taints", elemType: UpdateKubernetesNodePoolRequestBodyTaints })
  taints?: UpdateKubernetesNodePoolRequestBodyTaints[];
}


export class UpdateKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateKubernetesNodePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateKubernetesNodePoolPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateKubernetesNodePoolRequestBodyInput;
}


export class UpdateKubernetesNodePoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateKubernetesNodePool202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateKubernetesNodePool401ApplicationJSONObject?: UpdateKubernetesNodePool401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
