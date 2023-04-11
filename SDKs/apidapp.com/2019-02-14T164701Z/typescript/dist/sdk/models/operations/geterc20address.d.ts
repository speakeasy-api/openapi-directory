import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetErc20AddressRequest extends SpeakeasyBase {
    address: string;
}
export declare class GetErc20AddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
