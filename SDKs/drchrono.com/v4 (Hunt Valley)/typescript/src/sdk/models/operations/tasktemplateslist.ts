import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaskTemplatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_group" })
  assigneeGroup?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_user" })
  assigneeUser?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;
}


export class TaskTemplatesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// TaskTemplatesList200ApplicationJson
/** 
 * Paginated Result
**/
export class TaskTemplatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskTemplate })
  data?: shared.TaskTemplate[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class TaskTemplatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TaskTemplatesListQueryParams;

  @SpeakeasyMetadata()
  security: TaskTemplatesListSecurity;
}


export class TaskTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskTemplatesList200ApplicationJSONObject?: TaskTemplatesList200ApplicationJson;
}
