import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFileCommentsIdRequest extends SpeakeasyBase {
    /**
     * File Comment ID.
     */
    id: number;
}
export declare class DeleteFileCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
