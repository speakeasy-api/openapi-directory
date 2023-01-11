import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeploymentVariablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" })
  environmentUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateDeploymentVariableQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variable_uuid" })
  variableUuid: string;
}


export class CreateDeploymentVariableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDeploymentVariablePathParams;

  @SpeakeasyMetadata()
  queryParams: CreateDeploymentVariableQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class CreateDeploymentVariableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deploymentVariable?: Record<string, any>;

  @SpeakeasyMetadata()
  error?: Record<string, any>;
}
