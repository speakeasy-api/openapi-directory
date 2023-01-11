import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersSelectedUserSshKeysPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class PostUsersSelectedUserSshKeysSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostUsersSelectedUserSshKeysRequest extends SpeakeasyBase {
    pathParams: PostUsersSelectedUserSshKeysPathParams;
    request?: Record<string, any>;
    security: PostUsersSelectedUserSshKeysSecurity;
}
export declare class PostUsersSelectedUserSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    sshAccountKey?: Record<string, any>;
}
