import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClusterlintResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetClusterlintResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=run_id" })
  runId?: string;
}


// GetClusterlintResults200ApplicationJsonDiagnosticsObject
/** 
 * Metadata about the Kubernetes API object the diagnostic is reported on.
**/
export class GetClusterlintResults200ApplicationJsonDiagnosticsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;
}


export class GetClusterlintResults200ApplicationJsonDiagnostics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_name" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: GetClusterlintResults200ApplicationJsonDiagnosticsObject;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;
}


export class GetClusterlintResults200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=diagnostics", elemType: GetClusterlintResults200ApplicationJsonDiagnostics })
  diagnostics?: GetClusterlintResults200ApplicationJsonDiagnostics[];

  @SpeakeasyMetadata({ data: "json, name=requested_at" })
  requestedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=run_id" })
  runId?: string;
}


export class GetClusterlintResults401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetClusterlintResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClusterlintResultsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetClusterlintResultsQueryParams;
}


export class GetClusterlintResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClusterlintResults200ApplicationJSONObject?: GetClusterlintResults200ApplicationJson;

  @SpeakeasyMetadata()
  getClusterlintResults401ApplicationJSONObject?: GetClusterlintResults401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
