import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CfgLoadRequest extends SpeakeasyBase {
    /**
     * MIMIC agent configuration file to load
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
    /**
     * Agent number in current configuration to start placing the new agents
     */
    startAgentNum: number;
}
export declare class CfgLoadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    cfgLoad200ApplicationJSONObject?: Record<string, number>;
}
