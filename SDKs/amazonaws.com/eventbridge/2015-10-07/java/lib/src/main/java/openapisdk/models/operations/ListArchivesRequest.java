package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArchivesRequest {
    public ListArchivesHeaders headers;
    public ListArchivesRequest withHeaders(ListArchivesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListArchivesRequest request;
    public ListArchivesRequest withRequest(openapisdk.models.shared.ListArchivesRequest request) {
        this.request = request;
        return this;
    }
}