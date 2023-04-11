import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The current user.
     */
    account?: Record<string, any>;
    /**
     * When the request wasn't authenticated.
     */
    error?: Record<string, any>;
}
