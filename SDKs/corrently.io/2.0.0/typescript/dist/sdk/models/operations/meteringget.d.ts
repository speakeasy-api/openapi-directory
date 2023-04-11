import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeteringGetRequest extends SpeakeasyBase {
    /**
     * Account/Address (Stromkonto) to retrieve reading for.
     */
    account?: string;
}
/**
 * Success
 */
export declare class MeteringGet200ApplicationJSON extends SpeakeasyBase {
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
     * Update credits this meter has. Gets refilled automtically to prevent too frequent updates
     */
    credits?: any;
    /**
     * API Consensus time this reading was fully received
     */
    timeStamp?: number;
    /**
     * Time to Live for this reader. If no update is provided it gets decommissioned.
     */
    ttl?: number;
}
export declare class MeteringGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    meteringGet200ApplicationJSONObject?: MeteringGet200ApplicationJSON;
}
