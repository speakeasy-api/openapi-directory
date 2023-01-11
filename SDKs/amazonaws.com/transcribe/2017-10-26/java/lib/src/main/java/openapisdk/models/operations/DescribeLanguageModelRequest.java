package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLanguageModelRequest {
    public DescribeLanguageModelHeaders headers;
    public DescribeLanguageModelRequest withHeaders(DescribeLanguageModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLanguageModelRequest request;
    public DescribeLanguageModelRequest withRequest(openapisdk.models.shared.DescribeLanguageModelRequest request) {
        this.request = request;
        return this;
    }
}