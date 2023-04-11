import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OptionsWalletAccountIdRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    id: string;
}
export declare class OptionsWalletAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
