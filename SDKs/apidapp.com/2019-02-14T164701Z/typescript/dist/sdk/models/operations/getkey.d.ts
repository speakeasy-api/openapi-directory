import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetKeyRequest extends SpeakeasyBase {
    token?: string;
}
export declare class GetKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
