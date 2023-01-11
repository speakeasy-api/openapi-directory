import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSearchAspectIdFullsearchAspectIdEnum {
    Complete = "complete",
    Corpreg = "corpreg",
    Bcgaz1 = "bcgaz1",
    Bcgaz2 = "bcgaz2",
    Oic = "oic",
    Psl = "psl",
    Ecb = "ecb",
    Hscr = "hscr",
    ArchOic = "arch_oic"
}


export class GetSearchAspectIdFullsearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aspectId" })
  aspectId: GetSearchAspectIdFullsearchAspectIdEnum;
}


export class GetSearchAspectIdFullsearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=e" })
  e: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lFrag" })
  lFrag: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nFrag" })
  nFrag: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=s" })
  s: string;
}


export class GetSearchAspectIdFullsearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchAspectIdFullsearchPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchAspectIdFullsearchQueryParams;
}


export class GetSearchAspectIdFullsearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
