package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeHapgRequest {
    public DescribeHapgHeaders headers;
    public DescribeHapgRequest withHeaders(DescribeHapgHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeHapgRequest request;
    public DescribeHapgRequest withRequest(openapisdk.models.shared.DescribeHapgRequest request) {
        this.request = request;
        return this;
    }
}