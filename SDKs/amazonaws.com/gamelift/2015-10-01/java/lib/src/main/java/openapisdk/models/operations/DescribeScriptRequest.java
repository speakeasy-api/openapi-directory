package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScriptRequest {
    public DescribeScriptHeaders headers;
    public DescribeScriptRequest withHeaders(DescribeScriptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeScriptInput request;
    public DescribeScriptRequest withRequest(openapisdk.models.shared.DescribeScriptInput request) {
        this.request = request;
        return this;
    }
}