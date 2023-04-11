import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateCampaignSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateCampaignResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    createCampaign201ApplicationJSONObject?: Record<string, any>;
}
