package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionAliasPermissionsRequest {
    public DescribeConnectionAliasPermissionsHeaders headers;
    public DescribeConnectionAliasPermissionsRequest withHeaders(DescribeConnectionAliasPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConnectionAliasPermissionsRequest request;
    public DescribeConnectionAliasPermissionsRequest withRequest(openapisdk.models.shared.DescribeConnectionAliasPermissionsRequest request) {
        this.request = request;
        return this;
    }
}