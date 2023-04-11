import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MgetInfoRequest extends SpeakeasyBase {
    /**
     * Multiple strings of info.
     */
    infoArray: string[];
}
export declare class MgetInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    mgetInfo200ApplicationJSONObjects?: Record<string, any>[];
}
