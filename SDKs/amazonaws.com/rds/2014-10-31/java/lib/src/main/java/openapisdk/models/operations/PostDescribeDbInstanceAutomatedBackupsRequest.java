package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbInstanceAutomatedBackupsRequest {
    public PostDescribeDbInstanceAutomatedBackupsQueryParams queryParams;
    public PostDescribeDbInstanceAutomatedBackupsRequest withQueryParams(PostDescribeDbInstanceAutomatedBackupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbInstanceAutomatedBackupsHeaders headers;
    public PostDescribeDbInstanceAutomatedBackupsRequest withHeaders(PostDescribeDbInstanceAutomatedBackupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbInstanceAutomatedBackupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}