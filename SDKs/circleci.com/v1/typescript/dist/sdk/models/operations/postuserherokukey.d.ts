import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Your Heroku API key is invalid.
 *
 * @remarks
 *
 */
export declare class PostUserHerokuKey403ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class PostUserHerokuKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your Heroku API key is invalid.
     *
     * @remarks
     *
     */
    postUserHerokuKey403ApplicationJSONObject?: PostUserHerokuKey403ApplicationJSON;
}
