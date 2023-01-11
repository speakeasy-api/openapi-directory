import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateKubernetesClusterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class UpdateKubernetesClusterRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_upgrade" })
  autoUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maintenance_policy" })
  maintenancePolicy?: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=surge_upgrade" })
  surgeUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateKubernetesCluster401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateKubernetesClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateKubernetesClusterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateKubernetesClusterRequestBodyInput;
}


export class UpdateKubernetesClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateKubernetesCluster202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateKubernetesCluster401ApplicationJSONObject?: UpdateKubernetesCluster401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
