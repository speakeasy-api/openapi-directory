package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePredictorRequest {
    public DescribePredictorHeaders headers;
    public DescribePredictorRequest withHeaders(DescribePredictorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePredictorRequest request;
    public DescribePredictorRequest withRequest(openapisdk.models.shared.DescribePredictorRequest request) {
        this.request = request;
        return this;
    }
}