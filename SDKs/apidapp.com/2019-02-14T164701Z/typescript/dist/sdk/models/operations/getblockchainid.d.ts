import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBlockchainIdSecurity extends SpeakeasyBase {
    key2: string;
}
export declare class GetBlockchainIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetBlockchainIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
