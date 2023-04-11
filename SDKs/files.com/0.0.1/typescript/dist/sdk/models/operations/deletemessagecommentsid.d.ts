import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMessageCommentsIdRequest extends SpeakeasyBase {
    /**
     * Message Comment ID.
     */
    id: number;
}
export declare class DeleteMessageCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
