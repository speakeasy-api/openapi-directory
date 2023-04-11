import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCommentByIdRequest extends SpeakeasyBase {
    /**
     * Comment identifier.
     */
    id: number;
}
export declare class GetCommentByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
