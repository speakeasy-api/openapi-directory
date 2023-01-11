package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeHsmRequest {
    public DescribeHsmHeaders headers;
    public DescribeHsmRequest withHeaders(DescribeHsmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeHsmRequest request;
    public DescribeHsmRequest withRequest(openapisdk.models.shared.DescribeHsmRequest request) {
        this.request = request;
        return this;
    }
}