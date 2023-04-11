import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeletePublicKeyRequest extends SpeakeasyBase {
    keyIds: string;
}
export declare class EnterpriseAdminDeletePublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
