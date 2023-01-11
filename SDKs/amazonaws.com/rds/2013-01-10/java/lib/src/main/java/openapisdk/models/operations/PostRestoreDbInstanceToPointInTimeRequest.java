package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbInstanceToPointInTimeRequest {
    public PostRestoreDbInstanceToPointInTimeQueryParams queryParams;
    public PostRestoreDbInstanceToPointInTimeRequest withQueryParams(PostRestoreDbInstanceToPointInTimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreDbInstanceToPointInTimeHeaders headers;
    public PostRestoreDbInstanceToPointInTimeRequest withHeaders(PostRestoreDbInstanceToPointInTimeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreDbInstanceToPointInTimeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}