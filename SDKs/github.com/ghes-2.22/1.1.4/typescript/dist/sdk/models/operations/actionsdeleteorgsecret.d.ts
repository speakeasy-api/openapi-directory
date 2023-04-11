import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteOrgSecretRequest extends SpeakeasyBase {
    org: string;
    /**
     * secret_name parameter
     */
    secretName: string;
}
export declare class ActionsDeleteOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
