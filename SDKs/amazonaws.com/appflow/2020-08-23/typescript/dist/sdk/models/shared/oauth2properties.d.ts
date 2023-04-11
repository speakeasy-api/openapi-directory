import { SpeakeasyBase } from "../../../internal/utils";
import { OAuth2GrantTypeEnum } from "./oauth2granttypeenum";
/**
 * The OAuth 2.0 properties required for OAuth 2.0 authentication.
 */
export declare class OAuth2Properties extends SpeakeasyBase {
    oAuth2GrantType: OAuth2GrantTypeEnum;
    tokenUrl: string;
    tokenUrlCustomProperties?: Record<string, string>;
}
