import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsConfigurationType } from "./analyticsconfigurationtype";
import { ExplicitAuthFlowsTypeEnum } from "./explicitauthflowstypeenum";
import { OAuthFlowTypeEnum } from "./oauthflowtypeenum";
import { PreventUserExistenceErrorTypesEnum } from "./preventuserexistenceerrortypesenum";
import { TokenValidityUnitsType } from "./tokenvalidityunitstype";
/**
 * Contains information about a user pool client.
 */
export declare class UserPoolClientType extends SpeakeasyBase {
    accessTokenValidity?: number;
    allowedOAuthFlows?: OAuthFlowTypeEnum[];
    allowedOAuthFlowsUserPoolClient?: boolean;
    allowedOAuthScopes?: string[];
    analyticsConfiguration?: AnalyticsConfigurationType;
    authSessionValidity?: number;
    callbackURLs?: string[];
    clientId?: string;
    clientName?: string;
    clientSecret?: string;
    creationDate?: Date;
    defaultRedirectURI?: string;
    enablePropagateAdditionalUserContextData?: boolean;
    enableTokenRevocation?: boolean;
    explicitAuthFlows?: ExplicitAuthFlowsTypeEnum[];
    idTokenValidity?: number;
    lastModifiedDate?: Date;
    logoutURLs?: string[];
    preventUserExistenceErrors?: PreventUserExistenceErrorTypesEnum;
    readAttributes?: string[];
    refreshTokenValidity?: number;
    supportedIdentityProviders?: string[];
    tokenValidityUnits?: TokenValidityUnitsType;
    userPoolId?: string;
    writeAttributes?: string[];
}
