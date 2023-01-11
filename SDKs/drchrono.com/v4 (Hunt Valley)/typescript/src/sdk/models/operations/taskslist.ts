import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TasksListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_group" })
  assigneeGroup?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_user" })
  assigneeUser?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_date" })
  dueAtDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_range" })
  dueAtRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_since" })
  dueAtSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_unknown" })
  dueAtUnknown?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;
}


export class TasksListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// TasksList200ApplicationJson
/** 
 * Paginated Result
**/
export class TasksList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Task })
  data?: shared.Task[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class TasksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TasksListQueryParams;

  @SpeakeasyMetadata()
  security: TasksListSecurity;
}


export class TasksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tasksList200ApplicationJSONObject?: TasksList200ApplicationJson;
}
