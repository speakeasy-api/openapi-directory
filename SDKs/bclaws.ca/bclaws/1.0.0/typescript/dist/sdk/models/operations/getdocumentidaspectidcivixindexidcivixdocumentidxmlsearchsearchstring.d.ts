import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum {
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
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams extends SpeakeasyBase {
    aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum;
    civixDocumentId: string;
    civixIndexId: string;
    searchString: string;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest extends SpeakeasyBase {
    pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
