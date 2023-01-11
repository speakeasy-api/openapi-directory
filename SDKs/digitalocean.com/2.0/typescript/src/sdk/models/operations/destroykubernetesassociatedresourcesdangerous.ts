import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DestroyKubernetesAssociatedResourcesDangerousPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class DestroyKubernetesAssociatedResourcesDangerous401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DestroyKubernetesAssociatedResourcesDangerousRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DestroyKubernetesAssociatedResourcesDangerousPathParams;
}


export class DestroyKubernetesAssociatedResourcesDangerousResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  destroyKubernetesAssociatedResourcesDangerous401ApplicationJSONObject?: DestroyKubernetesAssociatedResourcesDangerous401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
