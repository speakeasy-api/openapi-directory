package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishMetricsRequest {
    public PublishMetricsPathParams pathParams;
    public PublishMetricsRequest withPathParams(PublishMetricsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PublishMetricsHeaders headers;
    public PublishMetricsRequest withHeaders(PublishMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PublishMetricsRequestBody request;
    public PublishMetricsRequest withRequest(PublishMetricsRequestBody request) {
        this.request = request;
        return this;
    }
}