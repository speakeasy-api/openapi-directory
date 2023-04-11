import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The identifier of the 'aspect' (content group) to search
 */
export declare enum GetContentAspectIDCivixDocumentIDAspectIDEnum {
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
export declare class GetContentAspectIdCivixDocumentIdRequest extends SpeakeasyBase {
    /**
     * The identifier of the 'aspect' (content group) to search
     */
    aspectId: GetContentAspectIDCivixDocumentIDAspectIDEnum;
    /**
     * The document identification code for an index or directory
     */
    civixDocumentId: string;
}
export declare class GetContentAspectIdCivixDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
