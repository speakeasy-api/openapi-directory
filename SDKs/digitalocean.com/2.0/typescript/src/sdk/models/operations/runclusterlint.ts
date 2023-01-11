import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RunClusterlintPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class RunClusterlintRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude_checks" })
  excludeChecks?: string[];

  @SpeakeasyMetadata({ data: "json, name=exclude_groups" })
  excludeGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=include_checks" })
  includeChecks?: string[];

  @SpeakeasyMetadata({ data: "json, name=include_groups" })
  includeGroups?: string[];
}


export class RunClusterlint401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class RunClusterlintRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunClusterlintPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RunClusterlintRequestBody;
}


export class RunClusterlintResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runClusterlint202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  runClusterlint401ApplicationJSONObject?: RunClusterlint401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
