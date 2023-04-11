import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteNetworkRequest extends SpeakeasyBase {
    /**
     * Network name
     */
    nid: string;
}
export declare class DeleteNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
