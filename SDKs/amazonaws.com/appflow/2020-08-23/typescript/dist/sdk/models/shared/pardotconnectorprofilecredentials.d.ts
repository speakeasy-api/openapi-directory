import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 * The connector-specific profile credentials required when using Salesforce Pardot.
 */
export declare class PardotConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    clientCredentialsArn?: string;
    /**
     *  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
     */
    oAuthRequest?: ConnectorOAuthRequest;
    refreshToken?: string;
}
