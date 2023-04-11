import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InterferenceSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class InterferenceRequest extends SpeakeasyBase {
    /**
     * Interference layer name eg. QRM_map
     */
    name: string;
    /**
     * Network name eg. Overlapping broadcast stations
     */
    network: string;
}
export declare class InterferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
