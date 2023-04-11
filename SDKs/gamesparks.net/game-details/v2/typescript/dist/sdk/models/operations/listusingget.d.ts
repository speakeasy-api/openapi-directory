import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    gameModels?: shared.GameModel[];
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
