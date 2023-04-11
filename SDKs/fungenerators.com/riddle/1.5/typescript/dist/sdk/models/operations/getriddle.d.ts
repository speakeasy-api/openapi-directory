import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetRiddleRequest extends SpeakeasyBase {
    /**
     * ID of the riddle to fetch
     */
    id?: string;
}
export declare class GetRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
