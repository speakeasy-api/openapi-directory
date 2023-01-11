import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaskStatusesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TaskStatusesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class TaskStatusesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TaskStatusesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaskStatusesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: TaskStatusesReadQueryParams;

  @SpeakeasyMetadata()
  security: TaskStatusesReadSecurity;
}


export class TaskStatusesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskStatus?: shared.TaskStatus;
}
