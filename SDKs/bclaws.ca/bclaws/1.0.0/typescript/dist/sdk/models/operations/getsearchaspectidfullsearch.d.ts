import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSearchAspectIdFullsearchAspectIdEnum {
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
export declare class GetSearchAspectIdFullsearchPathParams extends SpeakeasyBase {
    aspectId: GetSearchAspectIdFullsearchAspectIdEnum;
}
export declare class GetSearchAspectIdFullsearchQueryParams extends SpeakeasyBase {
    e: number;
    lFrag: number;
    nFrag: number;
    q: string;
    s: string;
}
export declare class GetSearchAspectIdFullsearchRequest extends SpeakeasyBase {
    pathParams: GetSearchAspectIdFullsearchPathParams;
    queryParams: GetSearchAspectIdFullsearchQueryParams;
}
export declare class GetSearchAspectIdFullsearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
