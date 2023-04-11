import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDeletedUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deletedGameModels?: shared.DeletedGameModel[];
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
