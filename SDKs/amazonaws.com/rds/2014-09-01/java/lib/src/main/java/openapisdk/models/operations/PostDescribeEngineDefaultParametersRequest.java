package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEngineDefaultParametersRequest {
    public PostDescribeEngineDefaultParametersQueryParams queryParams;
    public PostDescribeEngineDefaultParametersRequest withQueryParams(PostDescribeEngineDefaultParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEngineDefaultParametersHeaders headers;
    public PostDescribeEngineDefaultParametersRequest withHeaders(PostDescribeEngineDefaultParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEngineDefaultParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}