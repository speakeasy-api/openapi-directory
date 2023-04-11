import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OptionsKeyKeyRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    key: string;
}
export declare class OptionsKeyKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
