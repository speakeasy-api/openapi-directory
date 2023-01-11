package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2AuthorizationCode oauth2AuthorizationCode;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity withOauth2AuthorizationCode(openapisdk.models.shared.SchemeOauth2AuthorizationCode oauth2AuthorizationCode) {
        this.oauth2AuthorizationCode = oauth2AuthorizationCode;
        return this;
    }
}