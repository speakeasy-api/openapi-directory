import { SpeakeasyBase } from "../../../internal/utils";
export declare class DestinationOauthConsentRequest extends SpeakeasyBase {
    destinationDefinitionId: string;
    destinationId?: string;
    /**
     * The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.
     */
    oAuthInputConfiguration?: any;
    /**
     * The url to redirect to after getting the user consent
     */
    redirectUrl: string;
    workspaceId: string;
}
