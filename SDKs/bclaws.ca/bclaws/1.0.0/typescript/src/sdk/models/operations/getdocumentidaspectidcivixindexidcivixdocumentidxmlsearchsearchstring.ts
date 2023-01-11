import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum {
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


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aspectId" })
  aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixDocumentId" })
  civixDocumentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixIndexId" })
  civixIndexId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchString" })
  searchString: string;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
