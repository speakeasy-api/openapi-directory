package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksFirehoseTestSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientAccessToken clientAccessToken;
    public PostWebhooksFirehoseTestSecurity withClientAccessToken(openapisdk.models.shared.SchemeClientAccessToken clientAccessToken) {
        this.clientAccessToken = clientAccessToken;
        return this;
    }
}