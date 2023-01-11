package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricWidgetImageRequest {
    public PostGetMetricWidgetImageQueryParams queryParams;
    public PostGetMetricWidgetImageRequest withQueryParams(PostGetMetricWidgetImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetMetricWidgetImageHeaders headers;
    public PostGetMetricWidgetImageRequest withHeaders(PostGetMetricWidgetImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetMetricWidgetImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}