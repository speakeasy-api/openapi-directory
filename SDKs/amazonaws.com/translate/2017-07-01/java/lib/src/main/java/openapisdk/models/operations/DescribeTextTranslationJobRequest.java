package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTextTranslationJobRequest {
    public DescribeTextTranslationJobHeaders headers;
    public DescribeTextTranslationJobRequest withHeaders(DescribeTextTranslationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTextTranslationJobRequest request;
    public DescribeTextTranslationJobRequest withRequest(openapisdk.models.shared.DescribeTextTranslationJobRequest request) {
        this.request = request;
        return this;
    }
}