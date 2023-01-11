import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetContentAspectIdCivixDocumentIdAspectIdEnum {
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
export declare class GetContentAspectIdCivixDocumentIdPathParams extends SpeakeasyBase {
    aspectId: GetContentAspectIdCivixDocumentIdAspectIdEnum;
    civixDocumentId: string;
}
export declare class GetContentAspectIdCivixDocumentIdRequest extends SpeakeasyBase {
    pathParams: GetContentAspectIdCivixDocumentIdPathParams;
}
export declare class GetContentAspectIdCivixDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
