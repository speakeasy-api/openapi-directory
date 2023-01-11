package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcknowledgeJobRequest {
    public AcknowledgeJobHeaders headers;
    public AcknowledgeJobRequest withHeaders(AcknowledgeJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcknowledgeJobInput request;
    public AcknowledgeJobRequest withRequest(openapisdk.models.shared.AcknowledgeJobInput request) {
        this.request = request;
        return this;
    }
}