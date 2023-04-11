import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckDomainRequest extends SpeakeasyBase {
    /**
     * Domain
     */
    domain: string;
}
/**
 * OK
 */
export declare class CheckDomain200ApplicationJSON extends SpeakeasyBase {
    isAvailable?: boolean;
}
export declare class CheckDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    checkDomain200ApplicationJSONObject?: CheckDomain200ApplicationJSON;
}
