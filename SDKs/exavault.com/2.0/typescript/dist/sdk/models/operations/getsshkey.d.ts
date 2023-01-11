import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSshKeyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSshKeyHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetSshKeyRequest extends SpeakeasyBase {
    pathParams: GetSshKeyPathParams;
    headers: GetSshKeyHeaders;
}
export declare class GetSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    sshKeyResponse?: shared.SshKeyResponse;
    statusCode: number;
}
