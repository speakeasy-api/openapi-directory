import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InstitutionArticlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=institution_string_id" })
  institutionStringId: string;
}


export class InstitutionArticlesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_id" })
  resourceId: string;
}


export class InstitutionArticlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstitutionArticlesPathParams;

  @SpeakeasyMetadata()
  queryParams: InstitutionArticlesQueryParams;
}


export class InstitutionArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Article })
  articles?: shared.Article[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
