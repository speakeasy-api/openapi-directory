import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
 */
export declare class LambdaAuthorizerConfig extends SpeakeasyBase {
    authorizerResultTtlInSeconds?: number;
    authorizerUri: string;
    identityValidationExpression?: string;
}
