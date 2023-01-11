package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MarkAsArchivedRequest {
    public MarkAsArchivedHeaders headers;
    public MarkAsArchivedRequest withHeaders(MarkAsArchivedHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MarkAsArchivedRequestBody request;
    public MarkAsArchivedRequest withRequest(MarkAsArchivedRequestBody request) {
        this.request = request;
        return this;
    }
}