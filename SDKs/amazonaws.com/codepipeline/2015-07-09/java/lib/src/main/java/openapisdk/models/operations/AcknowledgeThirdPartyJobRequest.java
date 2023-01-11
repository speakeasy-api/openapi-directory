package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcknowledgeThirdPartyJobRequest {
    public AcknowledgeThirdPartyJobHeaders headers;
    public AcknowledgeThirdPartyJobRequest withHeaders(AcknowledgeThirdPartyJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcknowledgeThirdPartyJobInput request;
    public AcknowledgeThirdPartyJobRequest withRequest(openapisdk.models.shared.AcknowledgeThirdPartyJobInput request) {
        this.request = request;
        return this;
    }
}