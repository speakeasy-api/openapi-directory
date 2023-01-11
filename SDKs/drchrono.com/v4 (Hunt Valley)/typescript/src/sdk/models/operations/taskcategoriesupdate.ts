import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaskCategoriesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TaskCategoriesUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class TaskCategoriesUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TaskCategoriesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaskCategoriesUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: TaskCategoriesUpdateQueryParams;

  @SpeakeasyMetadata()
  security: TaskCategoriesUpdateSecurity;
}


export class TaskCategoriesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
