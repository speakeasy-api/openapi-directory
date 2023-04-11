import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
/**
 * The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
 */
export declare enum GetRouteResultAuthorizationTypeEnum {
    None = "NONE",
    AwsIam = "AWS_IAM",
    Custom = "CUSTOM",
    Jwt = "JWT"
}
/**
 * Success
 */
export declare class GetRouteResult extends SpeakeasyBase {
    apiGatewayManaged?: boolean;
    apiKeyRequired?: boolean;
    authorizationScopes?: string[];
    authorizationType?: GetRouteResultAuthorizationTypeEnum;
    authorizerId?: string;
    modelSelectionExpression?: string;
    operationName?: string;
    requestModels?: Record<string, string>;
    requestParameters?: Record<string, ParameterConstraints>;
    routeId?: string;
    routeKey?: string;
    routeResponseSelectionExpression?: string;
    target?: string;
}
