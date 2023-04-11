import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The connector-specific credentials required when using Amazon Honeycode.
 */
export declare class HoneycodeConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    /**
     *  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
     */
    oAuthRequest?: ConnectorOAuthRequest;
    refreshToken?: string;
}
