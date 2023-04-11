import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCampaignSoundDataWavSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCampaignSoundDataWavRequest extends SpeakeasyBase {
    /**
     * An id of a campaign sound
     */
    id: number;
}
export declare class GetCampaignSoundDataWavResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
