import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The identifier of the 'aspect' (content group) to search
 */
export declare enum GetContentAspectIDAspectIDEnum {
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
export declare class GetContentAspectIdRequest extends SpeakeasyBase {
    /**
     * The identifier of the 'aspect' (content group) to search
     */
    aspectId: GetContentAspectIDAspectIDEnum;
}
export declare class GetContentAspectIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
