import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CfgSaveasRequest extends SpeakeasyBase {
    /**
     * MIMIC agent configuration file to save
     */
    cfgFile: string;
    /**
     * Agent number in cfgFile to start the loading
     */
    firstAgentNum: number;
    /**
     * Agent number in cfgFile to end the loading
     */
    lastAgentNum: number;
}
export declare class CfgSaveasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    cfgSaveas200ApplicationJSONObject?: Record<string, number>;
}
