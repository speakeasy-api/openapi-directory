import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetContentAspectIdAspectIdEnum {
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


export class GetContentAspectIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aspectId" })
  aspectId: GetContentAspectIdAspectIdEnum;
}


export class GetContentAspectIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentAspectIdPathParams;
}


export class GetContentAspectIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
