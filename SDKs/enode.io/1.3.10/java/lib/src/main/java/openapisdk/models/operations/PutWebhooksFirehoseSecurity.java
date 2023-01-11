package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWebhooksFirehoseSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientAccessToken clientAccessToken;
    public PutWebhooksFirehoseSecurity withClientAccessToken(openapisdk.models.shared.SchemeClientAccessToken clientAccessToken) {
        this.clientAccessToken = clientAccessToken;
        return this;
    }
}