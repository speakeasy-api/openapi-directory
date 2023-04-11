import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompleteDestinationOAuthRequest extends SpeakeasyBase {
    destinationDefinitionId: string;
    destinationId?: string;
    /**
     * The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.
     */
    oAuthInputConfiguration?: any;
    /**
     * The query parameters present in the redirect URL after a user granted consent e.g auth code
     */
    queryParams?: Record<string, any>;
    /**
     * When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.
     */
    redirectUrl?: string;
    workspaceId: string;
}
