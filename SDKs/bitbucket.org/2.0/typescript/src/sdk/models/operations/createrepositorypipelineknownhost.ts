import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateRepositoryPipelineKnownHostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class CreateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Record<string, any>;

  @SpeakeasyMetadata()
  pipelineKnownHost?: Record<string, any>;
}
