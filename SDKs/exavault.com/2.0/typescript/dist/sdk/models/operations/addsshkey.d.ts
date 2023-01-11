import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSshKeyHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class AddSshKeyAddSshKeyRequestBody extends SpeakeasyBase {
    publicKey: string;
    userId: number;
}
export declare class AddSshKeyRequest extends SpeakeasyBase {
    headers: AddSshKeyHeaders;
    request?: AddSshKeyAddSshKeyRequestBody;
}
export declare class AddSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    sshKeyResponse?: shared.SshKeyResponse;
    statusCode: number;
}
