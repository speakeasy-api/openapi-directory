import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCampaignSoundSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCampaignSoundRequest extends SpeakeasyBase {
    /**
     * An id of a campaign sound
     */
    id: number;
}
export declare class DeleteCampaignSoundResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
