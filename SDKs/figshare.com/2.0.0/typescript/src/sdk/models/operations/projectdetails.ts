import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class ProjectDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectDetailsPathParams;
}


export class ProjectDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  projectComplete?: shared.ProjectComplete;

  @SpeakeasyMetadata()
  statusCode: number;
}
