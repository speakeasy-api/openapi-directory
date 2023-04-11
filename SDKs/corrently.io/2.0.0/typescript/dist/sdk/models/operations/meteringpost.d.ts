import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeteringPostRequestBody extends SpeakeasyBase {
    /**
     * Meter Reading (prefered in Wh)
     */
    one80?: number;
    /**
     * Stromkonto account (address) associated with this metering.
     */
    account?: string;
    /**
     * Alias for 1.8.0
     */
    energy?: number;
    /**
     * Some private password you might choose on first update. However you need to use the same secret on every further posts.
     */
    secret?: string;
    /**
     * Alias for 1.8.0
     */
    value?: number;
    /**
     * Zipcode (Postleitzahl) of metered location
     */
    zip?: string;
}
/**
 * Success
 */
export declare class MeteringPost200ApplicationJSON extends SpeakeasyBase {
    /**
     * Reading as provided as input in Wh
     */
    one80?: number;
    /**
     * Green energy calculated using Green Power Index (GrünstromIndex) in Wh
     */
    one81?: number;
    /**
     * Grey energy calculated using Green Power Index (GrünstromIndex) in Wh
     */
    one82?: number;
    /**
     * Time this reading got imported into consensus (e.q. signed timestamp).
     */
    processingTime?: number;
    /**
     * Stromkonto/Metering address allocated (this is not the MELOID!)
     */
    account?: string;
    /**
     * CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)
     */
    co2GOekostrom?: number;
    /**
     * CO2 Emission of metered energy in a standard mix
     */
    co2GStandard?: number;
    /**
     * API Consensus time this reading was fully received
     */
    timeStamp?: number;
}
export declare class MeteringPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    meteringPost200ApplicationJSONObject?: MeteringPost200ApplicationJSON;
}
