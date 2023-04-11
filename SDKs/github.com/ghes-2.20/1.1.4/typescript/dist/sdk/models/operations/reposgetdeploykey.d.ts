import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetDeployKeyRequest extends SpeakeasyBase {
    /**
     * key_id parameter
     */
    keyId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetDeployKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    deployKey?: shared.DeployKey;
}
