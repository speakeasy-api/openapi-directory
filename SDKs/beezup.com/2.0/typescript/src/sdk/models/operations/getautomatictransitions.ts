import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutomaticTransitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeId" })
  storeId?: string;
}


export class GetAutomaticTransitionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetAutomaticTransitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAutomaticTransitionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAutomaticTransitionsHeaders;
}


export class GetAutomaticTransitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  automaticTransitionInfoList?: shared.AutomaticTransitionInfoList;
}
