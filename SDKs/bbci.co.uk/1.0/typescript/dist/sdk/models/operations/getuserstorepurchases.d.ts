import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserStorePurchasesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetUserStorePurchasesRequest extends SpeakeasyBase {
    /**
     * The BBC-id cookie value
     */
    identityCookie: number;
}
export declare class GetUserStorePurchasesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
