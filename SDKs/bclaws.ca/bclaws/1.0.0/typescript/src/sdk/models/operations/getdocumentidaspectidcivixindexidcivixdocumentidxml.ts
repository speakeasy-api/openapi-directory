import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum {
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


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aspectId" })
  aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixDocumentId" })
  civixDocumentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=civixIndexId" })
  civixIndexId: string;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams;
}


export class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
