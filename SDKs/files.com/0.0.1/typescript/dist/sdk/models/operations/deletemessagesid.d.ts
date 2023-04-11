import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMessagesIdRequest extends SpeakeasyBase {
    /**
     * Message ID.
     */
    id: number;
}
export declare class DeleteMessagesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
