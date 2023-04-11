import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFileCampaignSoundSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostFileCampaignSoundRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostFileCampaignSoundRequestBody extends SpeakeasyBase {
    /**
     * A sound file encoded in binary form
     */
    file: PostFileCampaignSoundRequestBodyFile;
    /**
     * Optional name of a sound file, if the name is empty than it will be taken from a file
     */
    name?: string;
}
export declare class PostFileCampaignSoundRequest extends SpeakeasyBase {
    requestBody: PostFileCampaignSoundRequestBody;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
}
export declare class PostFileCampaignSoundResponse extends SpeakeasyBase {
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
