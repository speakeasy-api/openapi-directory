package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVirtualInterfacesRequest {
    public DescribeVirtualInterfacesHeaders headers;
    public DescribeVirtualInterfacesRequest withHeaders(DescribeVirtualInterfacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeVirtualInterfacesRequest request;
    public DescribeVirtualInterfacesRequest withRequest(openapisdk.models.shared.DescribeVirtualInterfacesRequest request) {
        this.request = request;
        return this;
    }
}