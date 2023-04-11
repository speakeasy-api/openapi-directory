import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormByIdRequest extends SpeakeasyBase {
    /**
     * Access Token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * Form unique ID number.
     */
    id: number;
    /**
     * Enter "**share**" to get information about associated receive folder.
     */
    include?: string;
}
export declare class GetFormByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    formResponse?: shared.FormResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
