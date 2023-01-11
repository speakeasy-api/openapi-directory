import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaskTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TaskTemplatesPartialUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_group" })
  assigneeGroup?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee_user" })
  assigneeUser?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;
}


export class TaskTemplatesPartialUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TaskTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaskTemplatesPartialUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: TaskTemplatesPartialUpdateQueryParams;

  @SpeakeasyMetadata()
  security: TaskTemplatesPartialUpdateSecurity;
}


export class TaskTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
