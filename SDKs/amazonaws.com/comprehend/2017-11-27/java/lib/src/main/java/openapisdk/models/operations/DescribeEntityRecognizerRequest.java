package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEntityRecognizerRequest {
    public DescribeEntityRecognizerHeaders headers;
    public DescribeEntityRecognizerRequest withHeaders(DescribeEntityRecognizerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEntityRecognizerRequest request;
    public DescribeEntityRecognizerRequest withRequest(openapisdk.models.shared.DescribeEntityRecognizerRequest request) {
        this.request = request;
        return this;
    }
}