import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum {
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
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams extends SpeakeasyBase {
    aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum;
    civixDocumentId: string;
    civixIndexId: string;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest extends SpeakeasyBase {
    pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
