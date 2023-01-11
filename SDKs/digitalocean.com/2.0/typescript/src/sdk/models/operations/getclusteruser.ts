import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClusterUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetClusterUser200ApplicationJsonKubernetesClusterUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetClusterUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kubernetes_cluster_user" })
  kubernetesClusterUser?: GetClusterUser200ApplicationJsonKubernetesClusterUser;
}


export class GetClusterUser401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetClusterUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClusterUserPathParams;
}


export class GetClusterUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClusterUser200ApplicationJSONObject?: GetClusterUser200ApplicationJson;

  @SpeakeasyMetadata()
  getClusterUser401ApplicationJSONObject?: GetClusterUser401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
