package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbClusterToPointInTimeRequest {
    public PostRestoreDbClusterToPointInTimeQueryParams queryParams;
    public PostRestoreDbClusterToPointInTimeRequest withQueryParams(PostRestoreDbClusterToPointInTimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreDbClusterToPointInTimeHeaders headers;
    public PostRestoreDbClusterToPointInTimeRequest withHeaders(PostRestoreDbClusterToPointInTimeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreDbClusterToPointInTimeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}