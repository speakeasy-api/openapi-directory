import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringAspectIdEnum {
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


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aspectId" })
  aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringAspectIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixDocumentId" })
  civixDocumentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixIndexId" })
  civixIndexId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchString" })
  searchString: string;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
