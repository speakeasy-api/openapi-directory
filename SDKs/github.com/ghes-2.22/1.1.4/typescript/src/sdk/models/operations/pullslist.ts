import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base" })
  base?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.RepoEnum4;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.RepoEnum5;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: shared.RepoEnum2;
}


export class PullsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PullsListQueryParams;
}


export class PullsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PullRequestSimple })
  pullRequestSimples?: shared.PullRequestSimple[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
