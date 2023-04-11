import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETGameRegionOptionsUsingGETRequest extends SpeakeasyBase {
    /**
     * gameApiKey
     */
    gameApiKey: string;
}
export declare class GETGameRegionOptionsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    gameRegionOptionsDTO?: shared.GameRegionOptionsDTO;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
