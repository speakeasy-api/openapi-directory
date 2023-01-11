package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeNodeAssociationStatusRequest {
    public DescribeNodeAssociationStatusHeaders headers;
    public DescribeNodeAssociationStatusRequest withHeaders(DescribeNodeAssociationStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeNodeAssociationStatusRequest request;
    public DescribeNodeAssociationStatusRequest withRequest(openapisdk.models.shared.DescribeNodeAssociationStatusRequest request) {
        this.request = request;
        return this;
    }
}