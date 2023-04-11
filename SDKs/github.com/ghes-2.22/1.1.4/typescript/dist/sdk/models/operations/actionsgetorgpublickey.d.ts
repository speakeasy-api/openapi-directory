import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetOrgPublicKeyRequest extends SpeakeasyBase {
    org: string;
}
export declare class ActionsGetOrgPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsPublicKey?: shared.ActionsPublicKey;
}
