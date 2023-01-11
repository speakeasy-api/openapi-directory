import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaskCategoriesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TaskCategoriesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class TaskCategoriesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TaskCategoriesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaskCategoriesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: TaskCategoriesReadQueryParams;

  @SpeakeasyMetadata()
  security: TaskCategoriesReadSecurity;
}


export class TaskCategoriesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskCategory?: shared.TaskCategory;
}
