package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTextTranslationJobsRequest {
    public ListTextTranslationJobsQueryParams queryParams;
    public ListTextTranslationJobsRequest withQueryParams(ListTextTranslationJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTextTranslationJobsHeaders headers;
    public ListTextTranslationJobsRequest withHeaders(ListTextTranslationJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTextTranslationJobsRequest request;
    public ListTextTranslationJobsRequest withRequest(openapisdk.models.shared.ListTextTranslationJobsRequest request) {
        this.request = request;
        return this;
    }
}