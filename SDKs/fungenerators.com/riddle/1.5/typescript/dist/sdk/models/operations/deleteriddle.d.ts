import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class DeleteRiddleRequest extends SpeakeasyBase {
    /**
     * Riddle ID
     */
    id: string;
}
export declare class DeleteRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
