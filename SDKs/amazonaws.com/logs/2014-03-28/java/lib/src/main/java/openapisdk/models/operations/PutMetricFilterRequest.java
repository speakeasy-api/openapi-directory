package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMetricFilterRequest {
    public PutMetricFilterHeaders headers;
    public PutMetricFilterRequest withHeaders(PutMetricFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutMetricFilterRequest request;
    public PutMetricFilterRequest withRequest(openapisdk.models.shared.PutMetricFilterRequest request) {
        this.request = request;
        return this;
    }
}