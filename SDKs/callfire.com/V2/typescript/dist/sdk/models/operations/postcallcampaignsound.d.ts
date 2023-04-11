import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCallCampaignSoundSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostCallCampaignSoundRequest extends SpeakeasyBase {
    /**
     * Request object containing the name of a new campaign sound and phone number to call up
     */
    callCreateSound?: shared.CallCreateSound;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
}
export declare class PostCallCampaignSoundResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    campaignSound?: shared.CampaignSound;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
