import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessSaveRequest extends SpeakeasyBase {
    /**
     * Filename to save
     */
    filename: string;
}
export declare class AccessSaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    accessSave200ApplicationJSONStrings?: string[];
}
