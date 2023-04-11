import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The identifier of the 'aspect' (content group) to search
 */
export declare enum GetSearchAspectIDFullsearchAspectIDEnum {
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
export declare class GetSearchAspectIdFullsearchRequest extends SpeakeasyBase {
    /**
     * The identifier of the 'aspect' (content group) to search
     */
    aspectId: GetSearchAspectIDFullsearchAspectIDEnum;
    /**
     * last hit (end index)
     */
    e: number;
    /**
     * length of fragment snippets (< 200)
     */
    lFrag: number;
    /**
     * number of fragment snippets to return (< 10)
     */
    nFrag: number;
    /**
     * query term
     */
    q: string;
    /**
     * first hit (start index)
     */
    s: string;
}
export declare class GetSearchAspectIdFullsearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
