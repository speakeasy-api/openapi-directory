import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETGamesEndpointsUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class GETGamesEndpointsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    gameEndpointsModel?: shared.GameEndpointsModel;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
