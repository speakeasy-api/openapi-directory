import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { CognitoUserPoolConfig } from "./cognitouserpoolconfig";
import { LambdaAuthorizerConfig } from "./lambdaauthorizerconfig";
import { OpenIDConnectConfig } from "./openidconnectconfig";
/**
 * Describes an additional authentication provider.
 */
export declare class AdditionalAuthenticationProvider extends SpeakeasyBase {
    authenticationType?: AuthenticationTypeEnum;
    lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
    openIDConnectConfig?: OpenIDConnectConfig;
    userPoolConfig?: CognitoUserPoolConfig;
}
