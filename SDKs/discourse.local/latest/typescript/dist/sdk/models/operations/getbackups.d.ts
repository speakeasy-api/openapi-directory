import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBackups200ApplicationJSON extends SpeakeasyBase {
    filename: string;
    lastModified: string;
    size: number;
}
export declare class GetBackupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    getBackups200ApplicationJSONObjects?: GetBackups200ApplicationJSON[];
}
