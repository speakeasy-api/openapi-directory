import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaskNotesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TaskNotesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=task" })
  task?: number;
}


export class TaskNotesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TaskNotesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaskNotesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: TaskNotesReadQueryParams;

  @SpeakeasyMetadata()
  security: TaskNotesReadSecurity;
}


export class TaskNotesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskNote?: shared.TaskNote;
}
