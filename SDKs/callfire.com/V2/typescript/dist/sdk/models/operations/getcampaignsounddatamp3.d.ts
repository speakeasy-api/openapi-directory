import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCampaignSoundDataMp3Security extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCampaignSoundDataMp3Request extends SpeakeasyBase {
    /**
     * An id of a campaign sound
     */
    id: number;
}
export declare class GetCampaignSoundDataMp3Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
