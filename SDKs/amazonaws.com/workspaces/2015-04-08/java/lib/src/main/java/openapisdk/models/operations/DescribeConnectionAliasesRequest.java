package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionAliasesRequest {
    public DescribeConnectionAliasesHeaders headers;
    public DescribeConnectionAliasesRequest withHeaders(DescribeConnectionAliasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConnectionAliasesRequest request;
    public DescribeConnectionAliasesRequest withRequest(openapisdk.models.shared.DescribeConnectionAliasesRequest request) {
        this.request = request;
        return this;
    }
}