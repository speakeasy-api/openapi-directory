package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccountPreferencesRequest {
    public DescribeAccountPreferencesHeaders headers;
    public DescribeAccountPreferencesRequest withHeaders(DescribeAccountPreferencesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeAccountPreferencesRequestBody request;
    public DescribeAccountPreferencesRequest withRequest(DescribeAccountPreferencesRequestBody request) {
        this.request = request;
        return this;
    }
}