import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsConfigurationType } from "./analyticsconfigurationtype";
import { ExplicitAuthFlowsTypeEnum } from "./explicitauthflowstypeenum";
import { OAuthFlowTypeEnum } from "./oauthflowtypeenum";
import { PreventUserExistenceErrorTypesEnum } from "./preventuserexistenceerrortypesenum";
import { TokenValidityUnitsType } from "./tokenvalidityunitstype";
/**
 * Represents the request to create a user pool client.
 */
export declare class CreateUserPoolClientRequest extends SpeakeasyBase {
    accessTokenValidity?: number;
    allowedOAuthFlows?: OAuthFlowTypeEnum[];
    allowedOAuthFlowsUserPoolClient?: boolean;
    allowedOAuthScopes?: string[];
    analyticsConfiguration?: AnalyticsConfigurationType;
    authSessionValidity?: number;
    callbackURLs?: string[];
    clientName: string;
    defaultRedirectURI?: string;
    enablePropagateAdditionalUserContextData?: boolean;
    enableTokenRevocation?: boolean;
    explicitAuthFlows?: ExplicitAuthFlowsTypeEnum[];
    generateSecret?: boolean;
    idTokenValidity?: number;
    logoutURLs?: string[];
    preventUserExistenceErrors?: PreventUserExistenceErrorTypesEnum;
    readAttributes?: string[];
    refreshTokenValidity?: number;
    supportedIdentityProviders?: string[];
    tokenValidityUnits?: TokenValidityUnitsType;
    userPoolId: string;
    writeAttributes?: string[];
}
