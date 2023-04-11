import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PepRetrieveSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * The type (pdf or json) in which the check should be returned
 */
export declare enum PepRetrieveAcceptEnum {
    ApplicationJson = "application/json",
    ApplicationPdf = "application/pdf"
}
export declare class PepRetrieveRequest extends SpeakeasyBase {
    /**
     * The type (pdf or json) in which the check should be returned
     */
    accept?: PepRetrieveAcceptEnum;
    /**
     * The id of the ordered Pep Sanction Check (id as returned by orderPepSanction call)
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class PepRetrieveDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class PepRetrieve200ApplicationJSONResults extends SpeakeasyBase {
    excerpts?: string;
    resultsURL?: string;
    searchType?: string;
    sourceAgency?: string;
    sourceEntity?: string;
    sourceID?: number;
    sourceName?: string;
    sourceType?: string;
}
/**
 * Result of a PEP and sanctions list check
 */
export declare class PepRetrieve200ApplicationJSON extends SpeakeasyBase {
    listsChecked: string;
    results?: PepRetrieve200ApplicationJSONResults;
    search: string;
    status: string;
    timestamp: Date;
    type: string;
}
export declare class PepRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Result of a PEP and sanctions list check
     */
    pepRetrieve200ApplicationJSONObject?: PepRetrieve200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    pepRetrieveDefaultApplicationJSONObject?: PepRetrieveDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
