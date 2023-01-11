import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdAspectIdEnum {
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


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aspectId" })
  aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdAspectIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixDocumentId" })
  civixDocumentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixIndexId" })
  civixIndexId: string;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
