import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1NonprofitsShowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetApiV1NonprofitsShowRequest extends SpeakeasyBase {
    /**
     * The id of a nonprofit from the CHANGE network.
     */
    id: string;
}
export declare class GetApiV1NonprofitsShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
