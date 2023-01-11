package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWebhooksFirehoseRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutWebhooksFirehoseRequestBody request;
    public PutWebhooksFirehoseRequest withRequest(PutWebhooksFirehoseRequestBody request) {
        this.request = request;
        return this;
    }
    public PutWebhooksFirehoseSecurity security;
    public PutWebhooksFirehoseRequest withSecurity(PutWebhooksFirehoseSecurity security) {
        this.security = security;
        return this;
    }
}