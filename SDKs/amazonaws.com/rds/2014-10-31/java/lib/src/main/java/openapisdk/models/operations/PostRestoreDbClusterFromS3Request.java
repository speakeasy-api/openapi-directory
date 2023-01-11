package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbClusterFromS3Request {
    public PostRestoreDbClusterFromS3QueryParams queryParams;
    public PostRestoreDbClusterFromS3Request withQueryParams(PostRestoreDbClusterFromS3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreDbClusterFromS3Headers headers;
    public PostRestoreDbClusterFromS3Request withHeaders(PostRestoreDbClusterFromS3Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreDbClusterFromS3Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}