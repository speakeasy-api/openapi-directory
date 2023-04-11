import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IsKeywordAvailableSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class IsKeywordAvailableRequest extends SpeakeasyBase {
    /**
     * To specify a keyword to search for. Example: SUN, MOON
     */
    keyword: string;
}
export declare class IsKeywordAvailableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    isKeywordAvailable200ApplicationJSONBoolean?: boolean;
}
