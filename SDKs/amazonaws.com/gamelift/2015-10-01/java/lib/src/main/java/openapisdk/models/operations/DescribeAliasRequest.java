package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAliasRequest {
    public DescribeAliasHeaders headers;
    public DescribeAliasRequest withHeaders(DescribeAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAliasInput request;
    public DescribeAliasRequest withRequest(openapisdk.models.shared.DescribeAliasInput request) {
        this.request = request;
        return this;
    }
}