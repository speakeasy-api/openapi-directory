import { SpeakeasyBase } from "../../../internal/utils";
import { AuthSchemeEnum } from "./authschemeenum";
import { ClientPasswordAuthTypeEnum } from "./clientpasswordauthtypeenum";
import { IAMAuthModeEnum } from "./iamauthmodeenum";
/**
 * Returns the details of authentication used by a proxy to log in as a specific database user.
 */
export declare class UserAuthConfigInfo extends SpeakeasyBase {
    authScheme?: AuthSchemeEnum;
    clientPasswordAuthType?: ClientPasswordAuthTypeEnum;
    description?: string;
    iamAuth?: IAMAuthModeEnum;
    secretArn?: string;
    userName?: string;
}
