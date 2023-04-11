import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountIdSecurity extends SpeakeasyBase {
    key2: string;
}
export declare class GetAccountIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
