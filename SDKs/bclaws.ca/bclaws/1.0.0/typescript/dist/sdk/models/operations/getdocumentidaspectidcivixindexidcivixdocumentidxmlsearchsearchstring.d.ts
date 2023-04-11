import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The identifier of the 'aspect' (content group) to search
 */
export declare enum GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlSearchSearchStringAspectIDEnum {
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
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest extends SpeakeasyBase {
    /**
     * The identifier of the 'aspect' (content group) to search
     */
    aspectId: GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlSearchSearchStringAspectIDEnum;
    /**
     * The document identification code for an index or directory
     */
    civixDocumentId: string;
    /**
     * Index identification code
     */
    civixIndexId: string;
    /**
     * The text to search for within the document
     */
    searchString: string;
}
export declare class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
