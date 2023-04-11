import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DomainRankRequest extends SpeakeasyBase {
    /**
     * Domain
     */
    domain: string;
}
/**
 * OK
 */
export declare class DomainRank200ApplicationJSON extends SpeakeasyBase {
    rank?: number;
}
export declare class DomainRankResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    domainRank200ApplicationJSONObject?: DomainRank200ApplicationJSON;
}
