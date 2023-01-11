import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetContentAspectIdAspectIdEnum {
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
export declare class GetContentAspectIdPathParams extends SpeakeasyBase {
    aspectId: GetContentAspectIdAspectIdEnum;
}
export declare class GetContentAspectIdRequest extends SpeakeasyBase {
    pathParams: GetContentAspectIdPathParams;
}
export declare class GetContentAspectIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
