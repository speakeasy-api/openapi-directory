package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationSetSuppressionOptionsRequest {
    public PutConfigurationSetSuppressionOptionsPathParams pathParams;
    public PutConfigurationSetSuppressionOptionsRequest withPathParams(PutConfigurationSetSuppressionOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutConfigurationSetSuppressionOptionsHeaders headers;
    public PutConfigurationSetSuppressionOptionsRequest withHeaders(PutConfigurationSetSuppressionOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutConfigurationSetSuppressionOptionsRequestBody request;
    public PutConfigurationSetSuppressionOptionsRequest withRequest(PutConfigurationSetSuppressionOptionsRequestBody request) {
        this.request = request;
        return this;
    }
}