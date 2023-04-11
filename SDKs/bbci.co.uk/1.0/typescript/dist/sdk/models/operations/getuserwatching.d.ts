import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserWatchingRequest extends SpeakeasyBase {
    /**
     * The BBC-id cookie value
     */
    identityCookie: number;
}
export declare class GetUserWatchingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
