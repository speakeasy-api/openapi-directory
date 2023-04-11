import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRiddleSearchSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetRiddleSearchRequest extends SpeakeasyBase {
    /**
     * Category to get the riddle from
     */
    category?: string;
    /**
     * Text to search for in the riddle
     */
    query?: string;
}
export declare class GetRiddleSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
