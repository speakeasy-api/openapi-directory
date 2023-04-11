import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetContractIdSecurity extends SpeakeasyBase {
    key2: string;
}
export declare class GetContractIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetContractIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
