import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdAspectIdEnum {
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
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams extends SpeakeasyBase {
    aspectId: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdAspectIdEnum;
    civixDocumentId: string;
    civixIndexId: string;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest extends SpeakeasyBase {
    pathParams: GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
