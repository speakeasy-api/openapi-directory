package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLocationFsxWindowsRequest {
    public DescribeLocationFsxWindowsHeaders headers;
    public DescribeLocationFsxWindowsRequest withHeaders(DescribeLocationFsxWindowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLocationFsxWindowsRequest request;
    public DescribeLocationFsxWindowsRequest withRequest(openapisdk.models.shared.DescribeLocationFsxWindowsRequest request) {
        this.request = request;
        return this;
    }
}