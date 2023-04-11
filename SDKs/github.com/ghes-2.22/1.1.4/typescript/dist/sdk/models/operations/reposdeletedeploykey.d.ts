import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposDeleteDeployKeyRequest extends SpeakeasyBase {
    /**
     * key_id parameter
     */
    keyId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteDeployKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
