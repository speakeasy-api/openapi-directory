import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TasksReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TasksReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_group" })
  assigneeGroup?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_user" })
  assigneeUser?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_date" })
  dueAtDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_range" })
  dueAtRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_since" })
  dueAtSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_unknown" })
  dueAtUnknown?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;
}


export class TasksReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TasksReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TasksReadPathParams;

  @SpeakeasyMetadata()
  queryParams: TasksReadQueryParams;

  @SpeakeasyMetadata()
  security: TasksReadSecurity;
}


export class TasksReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  task?: shared.Task;
}
