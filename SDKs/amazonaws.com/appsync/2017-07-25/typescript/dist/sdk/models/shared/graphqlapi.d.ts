import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalAuthenticationProvider } from "./additionalauthenticationprovider";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { LambdaAuthorizerConfig } from "./lambdaauthorizerconfig";
import { LogConfig } from "./logconfig";
import { OpenIDConnectConfig } from "./openidconnectconfig";
import { UserPoolConfig } from "./userpoolconfig";
/**
 * Describes a GraphQL API.
 */
export declare class GraphqlApi extends SpeakeasyBase {
    additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
    apiId?: string;
    arn?: string;
    authenticationType?: AuthenticationTypeEnum;
    lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
    logConfig?: LogConfig;
    name?: string;
    openIDConnectConfig?: OpenIDConnectConfig;
    tags?: Record<string, string>;
    uris?: Record<string, string>;
    userPoolConfig?: UserPoolConfig;
    wafWebAclArn?: string;
    xrayEnabled?: boolean;
}
