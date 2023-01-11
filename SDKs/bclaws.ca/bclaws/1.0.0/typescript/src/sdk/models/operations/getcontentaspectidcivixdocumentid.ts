import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetContentAspectIdCivixDocumentIdAspectIdEnum {
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


export class GetContentAspectIdCivixDocumentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aspectId" })
  aspectId: GetContentAspectIdCivixDocumentIdAspectIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixDocumentId" })
  civixDocumentId: string;
}


export class GetContentAspectIdCivixDocumentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentAspectIdCivixDocumentIdPathParams;
}


export class GetContentAspectIdCivixDocumentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
