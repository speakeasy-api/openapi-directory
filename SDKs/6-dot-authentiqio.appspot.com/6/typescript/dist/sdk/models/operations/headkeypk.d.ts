import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HeadKeyPKRequest extends SpeakeasyBase {
    /**
     * Public Signing Key - Authentiq ID (43 chars)
     */
    pk: string;
}
export declare class HeadKeyPKResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
