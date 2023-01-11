import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaskCategoriesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class TaskCategoriesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TaskCategoriesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TaskCategoriesCreateQueryParams;

  @SpeakeasyMetadata()
  security: TaskCategoriesCreateSecurity;
}


export class TaskCategoriesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskCategory?: shared.TaskCategory;
}
