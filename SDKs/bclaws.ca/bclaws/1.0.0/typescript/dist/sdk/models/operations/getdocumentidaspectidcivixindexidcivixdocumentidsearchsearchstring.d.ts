import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringAspectIdEnum {
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
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams extends SpeakeasyBase {
    aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringAspectIdEnum;
    civixDocumentId: string;
    civixIndexId: string;
    searchString: string;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest extends SpeakeasyBase {
    pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
