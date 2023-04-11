import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The identifier of the 'aspect' (content group) to search
 */
export declare enum GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlAspectIDEnum {
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
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest extends SpeakeasyBase {
    /**
     * The identifier of the 'aspect' (content group) to search
     */
    aspectId: GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlAspectIDEnum;
    /**
     * The document identification code for an index or directory
     */
    civixDocumentId: string;
    /**
     * Index identification code
     */
    civixIndexId: string;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
