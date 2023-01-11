import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersSelectedUserHooksPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class PostUsersSelectedUserHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostUsersSelectedUserHooksRequest extends SpeakeasyBase {
    pathParams: PostUsersSelectedUserHooksPathParams;
    security: PostUsersSelectedUserHooksSecurity;
}
export declare class PostUsersSelectedUserHooksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    webhookSubscription?: Record<string, any>;
}
