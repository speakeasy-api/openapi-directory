import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class KeywordSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainCode" })
  domainCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfProducts" })
  numberOfProducts?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;
}


export class KeywordSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: KeywordSearchQueryParams;
}


export class KeywordSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keywordSearchResponse?: shared.KeywordSearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
