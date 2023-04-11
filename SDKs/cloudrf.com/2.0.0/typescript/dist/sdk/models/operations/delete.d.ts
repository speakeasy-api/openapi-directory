import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteRequest extends SpeakeasyBase {
    /**
     * Unique calculation ID number
     */
    cid: number;
}
export declare class DeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
