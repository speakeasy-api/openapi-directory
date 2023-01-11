package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEngineDefaultClusterParametersRequest {
    public PostDescribeEngineDefaultClusterParametersQueryParams queryParams;
    public PostDescribeEngineDefaultClusterParametersRequest withQueryParams(PostDescribeEngineDefaultClusterParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEngineDefaultClusterParametersHeaders headers;
    public PostDescribeEngineDefaultClusterParametersRequest withHeaders(PostDescribeEngineDefaultClusterParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEngineDefaultClusterParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}