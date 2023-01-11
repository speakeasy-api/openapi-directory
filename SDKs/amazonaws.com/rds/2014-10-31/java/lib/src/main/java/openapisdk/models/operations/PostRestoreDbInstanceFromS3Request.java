package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbInstanceFromS3Request {
    public PostRestoreDbInstanceFromS3QueryParams queryParams;
    public PostRestoreDbInstanceFromS3Request withQueryParams(PostRestoreDbInstanceFromS3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreDbInstanceFromS3Headers headers;
    public PostRestoreDbInstanceFromS3Request withHeaders(PostRestoreDbInstanceFromS3Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreDbInstanceFromS3Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}