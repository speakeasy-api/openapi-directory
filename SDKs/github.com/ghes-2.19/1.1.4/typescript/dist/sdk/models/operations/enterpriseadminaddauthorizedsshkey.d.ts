import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminAddAuthorizedSshKeyRequestBody extends SpeakeasyBase {
    /**
     * The public SSH key.
     */
    authorizedKey: string;
}
export declare class EnterpriseAdminAddAuthorizedSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    sshKeys?: shared.SshKey[];
}
