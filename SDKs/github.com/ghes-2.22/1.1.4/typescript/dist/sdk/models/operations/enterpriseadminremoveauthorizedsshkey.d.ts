import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminRemoveAuthorizedSshKeyRequestBody extends SpeakeasyBase {
    /**
     * The public SSH key.
     */
    authorizedKey: string;
}
export declare class EnterpriseAdminRemoveAuthorizedSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    sshKeys?: shared.SshKey[];
}
