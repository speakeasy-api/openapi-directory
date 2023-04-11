import { SpeakeasyBase } from "../../../internal/utils";
export declare class SourceOauthConsentRequest extends SpeakeasyBase {
    /**
     * The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.
     */
    oAuthInputConfiguration?: any;
    /**
     * The url to redirect to after getting the user consent
     */
    redirectUrl: string;
    sourceDefinitionId: string;
    sourceId?: string;
    workspaceId: string;
}
