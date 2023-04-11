import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETRegionOptionsUsingGETResponse extends SpeakeasyBase {
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
