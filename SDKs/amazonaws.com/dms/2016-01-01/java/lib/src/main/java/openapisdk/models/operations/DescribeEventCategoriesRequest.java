package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventCategoriesRequest {
    public DescribeEventCategoriesHeaders headers;
    public DescribeEventCategoriesRequest withHeaders(DescribeEventCategoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventCategoriesMessage request;
    public DescribeEventCategoriesRequest withRequest(openapisdk.models.shared.DescribeEventCategoriesMessage request) {
        this.request = request;
        return this;
    }
}