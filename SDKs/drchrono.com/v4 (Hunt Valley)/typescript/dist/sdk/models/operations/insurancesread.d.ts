import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InsurancesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class InsurancesReadRequest extends SpeakeasyBase {
    id: string;
    /**
     * One of `"emdeon"`, `"gateway"`, `"ihcfa"`
     */
    payerType: string;
    /**
     * Search term, which can be either a partial name, partial ID or the state.
     */
    term?: string;
}
export declare class InsurancesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    insurance?: shared.Insurance;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
