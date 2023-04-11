import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 * The OAuth 2.0 credentials required for OAuth 2.0 authentication.
 */
export declare class OAuth2Credentials extends SpeakeasyBase {
    accessToken?: string;
    clientId?: string;
    clientSecret?: string;
    /**
     *  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
     */
    oAuthRequest?: ConnectorOAuthRequest;
    refreshToken?: string;
}
